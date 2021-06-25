const config = require("./config.js");
const express = require("express");
const { urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
const proxy = require("express-http-proxy");
const path = require("path");
const { exec } = require("child_process");
const { existsSync, writeFileSync, readFileSync } = require("fs");
const { v4: uuid } = require("uuid");
console.debug(uuid())


const PathIndex = path.resolve(`${__dirname}/../build/index.html`);
const app = express();
const port = 3001;





// не указывать папку, только файл
const dbfilename = "db.json"
let storage = {
    AccessToken: {
        //userCookiesToken: instagramAccessToken
    }
};
if (!existsSync(dbfilename)) {
    writeFileSync(dbfilename, JSON.stringify(storage))
} else {
    storage = JSON.parse(readFileSync(dbfilename, { encoding: "utf-8" }))
}

console.debug(storage)







app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(express.static("build"));

app.get("/instalog", (req, res, next) => {
    exec(
        `curl -X POST \
        https://api.instagram.com/oauth/access_token \
        -F client_id=${config.AppId} \
        -F client_secret=${config.AppSecret} \
        -F grant_type=authorization_code \
        -F redirect_uri=${config.RedirectUrl} \
        -F code=${req.query.code}`,
        (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
            try {
                const result = JSON.parse(stdout);

                exec(
                    `curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${config.AppSecret}&access_token=${result.access_token}"`,
                    (error, stdout, stderr) => {
                        if (error) {
                            throw error;
                        }

                        try {
                            const result = JSON.parse(stdout)
                            const token = uuid();
                            storage.AccessToken[token] = result.access_token
                            writeFileSync(dbfilename, JSON.stringify(storage))
                            res.cookie('token', token, { domain: ".switter.maxqnei.com", sameSite: "none", httpOnly: true, secure: true, maxAge: 604800000 });
                            res.redirect(301, '//switter.maxqnei.com/instalog/userkey')
                        }
                        catch (error) {
                            console.debug(error, stdout)
                            res.status(404).send({ error: "[#2]Bad response from Instagram" })
                        }
                    }
                );

            } catch (error) {
                res.status(404).send({ error: "[#1]Bad response from Instagram" })
            }


        }
    );
});



app.get("/check/instalog", (req, res) => {
    console.debug("/check/instalog", req.cookies)
    if (!req.cookies.token) {
        res.send({
            error: "UNATHORIZED"
        });
        return;
    }

    if (!storage.AccessToken[req.cookies.token]) {
        res.send({
            error: "BAD_TOKEN"
        })
        return;
    }
    res.cookie('token', req.cookies.token, { domain: ".switter.maxqnei.com", maxAge: 604800000 });
    res.send({
        logged: true,
    })
})

app.get("/instaout", (req, res) => {
    if (req.cookies.token && storage.AccessToken[req.cookies.token]) {
        delete storage.AccessToken[req.cookies.token];
        writeFileSync(dbfilename, JSON.stringify(storage))
        res.clearCookie('token')
    }
    res.send({
        loggedout: true,
    })
})

app.get("/getinstaposts", (req, res) => {
    if (!req.cookies.token) {
        res.send({
            error: "UNATHORIZED",
            debug: {
                "cookies token": req.cookies
            }
        });
        return
    }

    if (!storage.AccessToken[req.cookies.token]) {
        res.send({
            error: "BAD_TOKEN"
        })
        return
    }


    const access_token = storage.AccessToken[req.cookies.token]


    exec(
        `curl -X GET \
            "https://graph.instagram.com/me?fields=id,username&access_token=${access_token}"`,
        (error, stdout, stderr) => {
            if (error) {
                throw error;
            }

            const outUser = JSON.parse(stdout);
            var outPosts = {
                data: [],
            };

            (function requestMedia(next) {
                var url = next ?? `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,timestamp,thumbnail_url,permalink&access_token=${access_token}`;
                
                exec(
                    `curl -X GET "${url}"`,
                    (error, stdout, stderr) => {
                        if (error) {
                            throw error;
                        }

        

                        if (!stdout) {
                            return res.send({
                                result: {
                                    user: outUser,
                                    posts: outPosts
                                }, error
                            });
                        }

                        const resultMedia = JSON.parse(stdout);

                        outPosts = {
                            data: [...outPosts.data, ...resultMedia.data],
                        };

                        if (resultMedia.paging && resultMedia.paging.next) {
                            requestMedia(resultMedia.paging.next);
                        } else {
                            res.send({
                                result: {
                                    user: outUser,
                                    posts: outPosts
                                }, error
                            });
                        }
                    }
                );
            })();
        }
    );
})


// app.get("*", (req, res) => {
//     res.sendFile(PathIndex);
// });
app.use("*", proxy("switter.maxqnei.com"));


app.listen(port, () => {
    console.log(`Listenin at http://*:${port}`);
});
