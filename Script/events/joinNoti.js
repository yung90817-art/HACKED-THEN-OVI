‎module.exports.config = {
‎    name: "joinNoti",
‎    eventType: ["log:subscribe"],
‎    version: "1.0.1",
‎    credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
‎    description: "Notification of bots or people entering groups with random gif/photo/video",
‎    dependencies: {
‎        "fs-extra": "",
‎        "path": "",
‎        "pidusage": ""
‎    }
‎};
‎ 
‎module.exports.onLoad = function () {
‎    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
‎    const { join } = global.nodemodule["path"];
‎ 
‎    const path = join(__dirname, "cache", "joinvideo");
‎    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
‎ 
‎    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
‎    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
‎ 
‎    return;
‎}
‎ 
‎ 
‎module.exports.run = async function({ api, event }) {
‎    const { join } = global.nodemodule["path"];
‎    const { threadID } = event;
‎    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
‎        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
‎        const fs = require("fs");
‎        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯
‎
‎________________________
‎
‎𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚dd𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗\n\n𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐚𝐡𝐚𝐥𝐥𝐚𝐡 🌺❤️-!!
‎
‎________________________\n\n𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧d
‎
‎${global.config.PREFIX}Help\n${global.config.PREFIX} Manu
‎
‎𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️
‎
‎\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
‎`, attachment: fs.createReadStream(__dirname + "/cache/ullash.mp4")} ,threadID));
‎    }
‎    else {
‎        try {
‎            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
‎            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
‎ 
‎            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
‎            const path = join(__dirname, "cache", "joinvideo");
‎            const pathGif = join(path, `${threadID}.video`);
‎ 
‎            var mentions = [], nameArray = [], memLength = [], i = 0;
‎            
‎            for (id in event.logMessageData.addedParticipants) {
‎                const userName = event.logMessageData.addedParticipants[id].fullName;
‎                nameArray.push(userName);
‎                mentions.push({ tag: userName, id });
‎                memLength.push(participantIDs.length - i++);
‎            }
‎            memLength.sort((a, b) => a - b);
‎            
‎            (typeof threadData.customJoin == "undefined") ? msg = "╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯ \n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n        [   {name} ]\n\n༆-✿ আপনাকে আমাদের࿐\n\n{threadName}\n\n🌺✨!!—এর পক্ষ-থেকে-!!✨🌺\n\n❤️🫰_ভালোবাস_অভিরাম_🫰❤️\n\n༆-✿আপনি_এই_গ্রুপের {soThanhVien} নং মেম্বার࿐\n\n╭•┄┅═══❁🌺❁═══┅┄•╮\n  🌸   𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️  🌸\n╰•┄┅═══❁🌺❁═══┅┄•╯" : msg = threadData.customJoin;
‎            msg = msg
‎            .replace(/\{name}/g, nameArray.join(', '))
‎            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
‎            .replace(/\{soThanhVien}/g, memLength.join(', '))
‎            .replace(/\{threadName}/g, threadName);
‎ 
‎            if (existsSync(path)) mkdirSync(path, { recursive: true });
‎ 
‎            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
‎ 
‎            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
‎            else if (randomPath.length != 0) {
‎                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
‎                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
‎            }
‎            else formPush = { body: msg, mentions }
‎ 
‎            return api.sendMessage(formPush, threadID);
‎        } catch (e) { return console.log(e) };
‎    }
‎              }
