const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents } = require("discord.js");


const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  allowedMentions: { repliedUser: true }, ws: {
    properties: { $browser: "Discord iOS" }
  },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "-";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  client.user.setActivity(`Guild : ${client.guilds.cache.size.toLocaleString()}`, { type: 'online' })
  client.user.setActivity(`${prefix}help`, { type: 'WATCHING' })
});


client.login(process.env.token).catch((err) => {
  console.log(err.message)
});


client.on('ready', () => {
  console.log(``)

  setInterval(() => {

    const activities = [`BY LAHBIL`, `Welcome To Arab Hosting`];
    const random = activities[Math.floor(Math.random() * activities.length)]

    client.user.setActivity(`${random}`, { type: `PLAYING` });

  }, 1000 * 5)// كل 20 ثانيه بيتغير

})

// ===================== Const Channel ===================== \\

const FeedbackChannel = "1171573026836463768" // ايدي روم الفيد باك
const SuggestionChannel = "" // ايدي روم الاقتراحات
const OfferChannel = "" // ايدي روم الخط التلقائي
const TaxChannel = "1171594747983446128" // ايدي روم الضريبه
const WelcomeChannel = "1171588554787397674" // ايدي روم الترحيب

const OrderWelcome = "" // ايدي روم الطلبات عشان تظهر في الويلكم
const ApllyWelcome = "" // ايدي روم التقديم عشان تظهر في الويلكم

const TransferChannel = "1171588065341481090" // ايدي روم التحويلات

// ===================== Const Catigory ===================== \\

const OrderCatigory = "" // ايدي كاتيغوري الطلبات
const ApplyCatigory = "" // ايدي كاتيغوري التقديم
const MediatorCatigory = ""
const MediatorCatigory_2 = ""
const MediatorCatigory_3 = ""
const MediatorCatigory_4 = ""

// ===================== Const Role ===================== \\

const SellerRole = "" // ايدي رتبة السيلر
const PerfixStore = "-" // البيرفكس عشان يظهر في الهيلب

const OwnerBot = "1130930220531191818"

const LinkServer = "https://discord.gg/VZACecuhG9" // لينك السيرفر

// ===================== Const Seller Role ===================== \\

const Netflix = ""
const Nitro = ""
const Insta = ""
const TikTok = ""
const Visa = ""
const Bot = ""
const Boost = ""
const Uc = ""
const Spotify = ""
const Shahid = ""
const Credit = ""
const Vote = ""

// ===================== Const Offers Room ===================== \\

const TeamOffer = "" // ايدي روم التيم اوفر
const OffersChannel = "" // ايدي روم الي راح تترسل ليها الاوفر
const OrderChannel = "" // ايدي روم الطلبات 

const OffersRole = "" // ايدي رتبة الي تتمنشن 
const TeamRole = "" // ايدي رتبة لي تقدر تنشر

// ===================== Const Line Guild ===================== \\

const Line = "https://cdn.discordapp.com/attachments/1157773177758421042/1171640095053463552/HlS1eN7.gif?ex=656fdede&is=655d69de&hm=58a5360ab2595fb9e3a53002&" // الخط الخاص بسيرفرك

// ===================== Const Emoji Guild ===================== \\

const SugEmoji_1 = "" // الايموجي الاول للاقتراحات
const SugEmoji_2 = "" // الايموجي الثاني للاقتراحات

const FedEmoji_1 = "" // الايموجي الاول للفيدباك
const FedEmoji_2 = "" // الايموجي الثاني للفيدباك

// ===================== Const Delete ===================== \\

let chnldel = ['1171588004477947995']; // ايدي روم الي ممنوع ذكر الكلمات


let autoDelet = ['اكونت', 'اكونتات', 'ديسكورد', '', '', 'رولات', 'متوفر', 'بيع', 'ابيع', 'للبيع', 'تفعيل', 'افع', 'حساب', 'حسابات', 'نسخ', 'نيترو', 'كميه', 'نيتروهات', 'كريديت', 'انسخ', 'انسخلك', 'تنسخ', 'سيرفر', 'عروض', 'عرض', 'لايك', 'لايكات', 'فولورز', 'نايترو', 'نيتفليكس', 'اكواد', 'كود', 'فولو', 'كميات', 'سيرفرات', 'تيكتوك', 'بوت', 'سيرفر', 'توكن', 'توكنات', 'سعر', 'السعر', 'سعره', 'شراء', 'السعر', 'توفر', 'توفير', 'بيعه', 'ابيعه', 'انباع', 'بوستات', 'افعل', 'تفعل', 'اسعار', 'الاسعار'] // الكلمات الي راح تنحذف في المنشور

// ===================== FeedBack ===================== \\

client.on('messageCreate', async message => {
  if (FeedbackChannel.includes(message.channel.id)) {

    if (message.author.bot) return;
    const att2 = new Discord.MessageEmbed()
      .setDescription(`
        > Thanks for FeedBack ${FedEmoji_1}
        
        > We Hope You Visit Us Again ${FedEmoji_2}`)
      .setImage(`${Line}`)
      .setThumbnail(message.author.avatarURL({ dynamic: true }))

      .setAuthor(message.author.username, message.author.avatarURL({ dynaimc: true }))
      .setTimestamp()
      .setColor("ORANGE")
    message.channel.send({ embeds: [att2] })
    return;
  }
})

// ===================== Suggestion ===================== \\

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (SuggestionChannel.includes(message.channel.id)) {
    message.delete()

    let args = message.content.split(',')

    let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))

      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

      .setDescription(`**
   > __New Sugesstion :__
   
   > ${args}**`)

      .setColor(message.guild.me.displayColor)

      .setImage(`${Line}`)

      .setTimestamp()

    message.channel.send({ embeds: [embed] }).then(msg => {
      msg.react(`${SugEmoji_1}`).then(() => {
        msg.react(`${SugEmoji_2}`)
      })
    })
  }
});

// ===================== Offer Room ===================== \\

client.on('messageCreate', async message => {
  if (OfferChannel.includes(message.channel.id)) {
    if (message.author.bot) return;
    const att2 = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setColor("ORANGE")
    message.channel.send({ embeds: [att2] })
    return;
  }
})

// ===================== Order Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === OrderCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` <:HachTag:1049422575639474236> Hello User Pls Select Your Order

\`#\`  <:HachTag:1049422575639474236> مرحبا.. رجاء اختيار الطلب الخاص بك

==================

>  \`-\` **Netflix**



>  \`-\` **Insta**



>  \`-\` **Nitro**



>  \`-\` **Visa**



>  \`-\` **Bot**



>  \`-\` **Designe**



>  \`-\` **Uc**



>  \`-\` **Boost**



>  \`-\` **Spotify**



>  \`-\` **Shahid**



>  \`-\` **Credit**



>  \`-\` **TikTok**

===========================

\`#\`  To Metion Seller : buy + Your Order

\`#\`   لمنشن السيلر الرجاء كتابة التالي : buy + المنتج

\`#\`   مثال : buy netflix | buy nitro
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Apply Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === ApplyCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسمك  :


>  \`-\` سنك  :


>  \`-\` عدد السيرفرات الي شغال فيها  :


>  \`-\` رولاتك  :


>  \`-\` طريقه الدفع الخاصه بك  :


>  \`-\` فيدباكاتك  :

==================

\`#\` يرجي ارسال فيدباكاتك هنا  :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _*", embeds: [embed] })

  }
});

// ===================== Mediator Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_2 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_2) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_3 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_3) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Mediator_4 Catigory ===================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === MediatorCatigory_4) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setDescription(`\`#\` Please Complete

\`#\`  الرجاء ملأ هذا الاستبيان

==================

>  \`-\` اسم البائع :


>  \`-\` ايدي البائع :


>  \`-\` اسم المشتري :


>  \`-\` ايدي المشتري :


>  \`-\` السلعة :


>  \`-\` ثمنها :
`)
      .setThumbnail(channel.guild.iconURL())

    channel.send({ content: "_ _", embeds: [embed] })

  }
});

// ===================== Code ===================== \\

const Database = require("@replit/database");
const Db = new Database();

client.on("channelCreate", (channel) => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket")) {
    Db.set(`Ticket-Channel_${channel.id}`, true)
  }
})

// ===================== Rename Ticket ===================== \\

client.on("messageCreate", async message => {
  if (message.content.toLowerCase() === (`re`) || message.content === (`استلام`)) {
    if (message.member.roles.cache.find(r => r.id === SellerRole)) {

      const isTicket = await Db.get(`Ticket-Channel_${message.channel.id}`) || message.channel.name.startsWith("ticket");
      if (!isTicket) return;
      message.delete()
      const channel = message.channel
      channel.setName(`By ${message.member.user.username}`)
      message.channel.send(` Renamed By <@${message.member.user.id}>`).then(msg => setTimeout(() => {
        msg.delete();
      }, 5000));
    }
  }
})

// ===================== Delete Ticket ===================== \\

client.on("messageCreate", async message => {
  if (message.content.toLowerCase() === (`de`)) {

    if (message.member.roles.cache.find(r => r.id === SellerRole)) {

      const isTicket = await Db.get(`Ticket-Channel_${message.channel.id}`) || message.channel.name.startsWith("ticket");
      console.log(isTicket)
      if (!isTicket) return;
      const channel = message.channel
      message.channel.send(`The ${channel.name} will delete in a few seconds`).then(msg => setTimeout(() => {
        channel.delete();
      }, 5000));
    }
  }
})

// ===================== Delete Ticket ===================== \\

client.on("messageCreate", message => {
  if (message.channel.id === TeamOffer) {
    if (message.author.bot) return;
    let seller = message.member.guild.roles.cache.find(i => i.id === TeamRole)

    if (message.member.roles.highest.position < seller.position) return message.reply("**You Are Not A Seller!**");
    if (message.content.length < 10) return message.reply("** يجب ان تتضمن الرساله ١٠ احرف علي الاقل ! ** ");

    let mentionedRole = message.mentions.roles.first()
    if (mentionedRole) return message.reply("** ارسل رسالتك بدون منشن! ** ");


    let chnnl = client.channels.cache.get(OffersChannel);

    chnnl.send(`> -  **__New Discount :__**
 
 **__${message.content}__**

> ** -  From : ${message.author} **
> _ _
> ** -  Mention : <@&${OffersRole}> **
> _ _
> ** -  Order : <#${OrderChannel}> **


`)
    message.reply("** Offer Sent!**")
    message.react('🎉')
    chnnl.send(`${Line}`)

  }
})

// ===================== Mention Seller ===================== \\

client.on('messageCreate', message => {
  if (message.content.startsWith('buy netflix')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${netflixrole}>||`)
  }
});

//nitro
client.on('messageCreate', message => {
  if (message.content.startsWith('buy nitro')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Nitro}>||`)
  }
});

//bot
client.on('messageCreate', message => {
  if (message.content.startsWith('buy bot')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Bot}>||`)
  }
});

//tiktok
client.on('messageCreate', message => {
  if (message.content.startsWith('buy tiktok')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${TikTok}>||`)
  }
});

//uc
client.on('messageCreate', message => {
  if (message.content.startsWith('buy uc')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Uc}>||`)
  }
});

//spotify
client.on('messageCreate', message => {
  if (message.content.startsWith('buy spotify')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Spotify}>||`)
  }
});

//visa
client.on('messageCreate', message => {
  if (message.content.startsWith('buy visa')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Visa}>||`)
  }
});

//boost
client.on('messageCreate', message => {
  if (message.content.startsWith('buy boost')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Boost}>||`)
  }
});

//vote
client.on('messageCreate', message => {
  if (message.content.startsWith('buy vote')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Vote}>||`)
  }
});

//credit
client.on('messageCreate', message => {
  if (message.content.startsWith('buy credit')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Credit}>||`)
  }
});

//shahid
client.on('messageCreate', message => {
  if (message.content.startsWith('buy shahid')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Shahid}>||`)
  }
});

//insta
client.on('messageCreate', message => {
  if (message.content.startsWith('buy insta')) {
    return message.reply(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&${Insta}>||`)
  }
});

// ===================== Cmd Line ===================== \\

client.on("messageCreate", message => {
  var cmd = message.content.split(' ')[0]

  if (cmd == prefix + "line" || cmd == prefix + "خط" || cmd == "line" || cmd == "خط") {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

    message.delete();

    let CmdEmbed = new MessageEmbed()

      .setColor(message.guild.me.displayHexColor)
      .setImage(`${Line}`)

    message.channel.send({ embeds: [CmdEmbed] });
  }
});

// ===================== Auto Tax ===================== \\

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (TaxChannel.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

    let Taxembed = new MessageEmbed()

      .setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

      .setThumbnail(client.user.avatarURL({ dynamic: true }))

      .addFields([
        {
          name: `الضريبه: `,
          value: `${tax}`
        },
        {
          name: `ضريبة الوسيط: `,
          value: `${tax4}`
        },
      ])
      .setColor(message.guild.me.displayColor)
      .setTimestamp()
    message.reply({ embeds: [Taxembed] }).catch((err) => {
      console.log(err.message)
    });
  }
});

// ===================== Welcome Embed ===================== \\

var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  let channel = member.guild.channels.cache.get(`${WelcomeChannel}`);

  let embed = new MessageEmbed()

    .setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
    .setThumbnail(member.user.avatarURL({ dynamic: true }))

    .setDescription(`** 
   > Hey \`${member.user.username}\`
           
   > Welcome To ${member.guild.name}
   
   > Member Id \`${member.id}\`

   > Invited By <@${inviter.id}>
   
   > For Apply <#${ApllyWelcome}>
   
   > For Order <#${OrderWelcome}> **`)

    .setColor(member.guild.me.displayHexColor)
    .setTimestamp()
    .setImage(`${Line}`)
  const mess = `${member.user}`
  channel.send({ embeds: [embed] }).catch((err) => {
    console.log(err.message)
    channel.send(`${mess}`)
  });
});

// ===================== Help Code ===================== \\

const { } = require('discord.js')
client.on("messageCreate", message => {
  if (message.content == prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("**__ Help Command __**")
      .setColor("000000")
      .setDescription(`
        **
        > Hey Brother

> I Am Galaxy Bot

> My Business Is To Help You Managing Your Server : Galaxy S

**
       `)
    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('Owners')
          .setEmoji('')
          .setLabel('Owners Cmds')
          .setStyle("DANGER"),
        new MessageButton()
          .setCustomId('Public')
          .setEmoji('')
          .setLabel('Public Cmds')
          .setStyle("SECONDARY"),
        new MessageButton()
          .setCustomId('Admins')
          .setEmoji('')
          .setLabel('Admins Cmds')
          .setStyle("SUCCESS"),
        new MessageButton()
          .setCustomId('Store')
          .setEmoji('')
          .setLabel('Store Cmds')
          .setStyle("PRIMARY"),
      )
    message.channel.send({ embeds: [embed], components: [row] });
  }
})
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("Owners Cmds")
      .setColor("000000")
      .setImage(`${Line}`)
      .setDescription(`**
        > ${PerfixStore}setactivity
        \` To Change Activity Bot \`
        
        > ${PerfixStore}setperfix
        \` To Change Perfix Bot \`
        
        > ${PerfixStore}setavatar
        \` To Change Avatar Bot \` **`)
    interaction.update({ embeds: [first] });
  }
})
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'Public') {
    const first = new MessageEmbed()
      .setTitle("** > Public Cmds**")
      .setDescription(`**
        > ${PerfixStore}uptime
         \` To Show Uptime Bot \`
        
        > ${PerfixStore}link
         \` To Show Link Server \`
        
        > ${PerfixStore}inrole
         \` To Show Role Member \`
         
         > ${PerfixStore}avatar
         \` To Show Avatar Member \`**`)
      .setColor("000000")
      .setImage(`${Line}`)
    interaction.update({ embeds: [first] });
  }
})
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'Admins') {
    const first = new MessageEmbed()
      .setTitle("** > Admin Cmds**")
      .setDescription(`**
        > ${PerfixStore}embed
        \` To Make Embed Message \`
        
        > ${PerfixStore}say
        \` To Make Say Message \`
        
        > ${PerfixStore}unbanall
        \` To UnBan All Member \`
        
        > ${PerfixStore}name
        \` To SetName A Member \`
        
        > ${PerfixStore}lock
        \` To Lock Channel \`
        
        > ${PerfixStore}unlock
        \` To UnLock Channel \`
        
        > ${PerfixStore}show
        \` To Show Channel \`
        
        > ${PerfixStore}hide
       \`  To Hide Channel \`
        
        > ${PerfixStore}ban
        \` To Ban Member \`
        
        > ${PerfixStore}unban
       \`  To UnBan Member \`

        > ${PerfixStore}mute
       \`  To Mute Member \`

        > ${PerfixStore}unmute
       \`  To UnMute Member \`
       
       > ${PerfixStore}g-role
       \`  To Give Role To Member \`
       
       > ${PerfixStore}r-role
       \`  To Remove Role To Member \`**`)
      .setColor("000000")
      .setImage(`${Line}`)
    interaction.update({ embeds: [first] });
  }
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'Store') {
    const first = new MessageEmbed()
      .setTitle("** > Store Cmds**")
      .setDescription(`**
        > ${PerfixStore}send
         \`  To Send Msg DM To Member \`
        
        > ${PerfixStore}come
         \`  To Come DM To Member \`
        
        > ${PerfixStore}tax
        \`  To Show Tax A Number \`**`)
      .setColor("000000")
      .setImage(`${Line}`)
    interaction.update({ embeds: [first] });
  }
});

// ===================== Come Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot || !message.channel.guild) return;
  if (message.content.startsWith(prefix + "come")) {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`:rolling_eyes: **You dont have a permissions**`);

    let args = message.content.split(' ')

    const user = message.mentions.members.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply(`:rolling_eyes: **Please mention user**`);

    let button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setLabel('View user')
          .setURL(`https://discord.com/users/${message.member.id}`))

      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setLabel('View message')
          .setURL(message.url))

    let embed = new MessageEmbed()
      .setColor(message.guild.me.displayColor)

      .setThumbnail(message.author.displayAvatarURL())

      .addFields(
        { name: `Channel:`, value: `${message.channel}`, inline: true },
        { name: `Description:`, value: `تم طلبك هنا <:Warn:1049422823954849935>`, inline: true },
      )
    let embed_2 = new MessageEmbed()
      .setTitle("**__Message Sent <:emoji_48:1050058677815627816> __**")
      .setDescription(`**
    > Wait For The Person To Come
    
    > Please Don't Spam And Wait Them**`)
      .setThumbnail(message.author.displayAvatarURL())
      .setColor(message.guild.me.displayColor)
    user.send({ embeds: [embed], components: [button] }).then(() => {
      message.reply({ embeds: [embed_2] })
    }).catch(() => {
      message.reply(`:rolling_eyes: ** I couldn't send the message**`)
    })
  }
})

// ===================== Embed Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'embed')) {

    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`)


    let args = message.content.split(' ').slice(1).join(' ')

    if (!args) return message.reply('** :x: Please select a message **')

    message.delete();

    let embed = new MessageEmbed()

      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))


      .setDescription(`**${args}**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))


      .setColor(message.guild.me.displayHexColor)


      .setTimestamp()

    let attach = message.attachments.first();

    if (attach) {
      embed.setImage(attach.proxyURL)
    }
    message.channel.send({ embeds: [embed] });
  }
})

// ===================== Say Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'say')) {

    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

    let args = message.content.split(' ').slice(2).join(' ')

    let argss = message.content.split(' ')

    let attach = message.attachments.first()

    if (!args) return message.channel.send('**:x: Please send something**');

    message.delete()
    if (!attach) {
      message.channel.send({ content: `${args}` });
    } else {
      message.channel.send({ content: `${args}`, files: [attach] });
    }
  }
})

// ===================== Send Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'send')) {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

    let id = message.content.split(' ')[1]

    let user = message.mentions.members.first() || message.guild.members.cache.get(id)

    let argss = message.content.split(' ').slice(2).join(' ')
    if (!user) return message.channel.send(`**:rolling_eyes: Please mention member or id **`)


    if (!argss) return message.channel.send(`**:x: Please send something **`)

    let attach = message.attachments.first()
    if (attach) {


      user.send({ content: argss, files: [attach] }).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
      }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
      })
    } else {
      user.send(argss).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
      }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
      })
    }
  }
})

// ===================== UnBann All Command ===================== \\

client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + 'unbanall')) {
    let b = await message.guild.bans.fetch()
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
    b.forEach(ban => message.guild.members.unban(ban.user))
    message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
  }
});

// ===================== Name Command ===================== \\

client.on('messageCreate', async message => {
  if (message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')) {

    const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
    const name = message.content.split(" ").slice(2).join(" ")

    if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
    if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

    if (!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
    if (!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

    member.setNickname(name).catch(() => { message.reply('لا يمكنني تغيير اسم هذا العضو !') })
  }
})

// ===================== Unlock Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'unlock')) {
    const permission = message.member.permissions.has("MANAGE_CHANNELS");
    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

    if (!permission)
      return message.reply(
        { content: ":x: **You don't have permission to use this command**", ephemeral: true }
      ).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
    })
  }
});

// ===================== Lock Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'lock')) {
    const permission = message.member.permissions.has("MANAGE_CHANNELS");
    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

    if (!permission)
      return message.reply(
        { content: ":x: **You don't have permission to use this command**", ephemeral: true }
      ).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })
    })
  }
});

// ===================== Show Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'show')) {
    const permission = message.member.permissions.has("MANAGE_CHANNELS");
    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

    if (!permission)
      return message.reply(
        { content: ":x: **You don't have permission to use this command**", ephemeral: true }
      ).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply({ content: `:white_check_mark: **<#${message.channel.id}> Done show this room.**`, ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })
    })
  }
});

// ===================== Hide Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'hide')) {

    const permission = message.member.permissions.has("MANAGE_CHANNELS");

    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

    if (!permission)
      return message.reply({ content: ":x: **You don't have permission to use this command**", ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)

      })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)

    })

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply({ content: `:white_check_mark: **<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)

      })
    })
  }
});

// ===================== UnBan Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'unban')) {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention member or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention member or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
})

// ===================== Ban Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  let c = message.content.split(' ')
  if (c[0] == prefix + 'ban') {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`** 😕 Please mention member or id **`);
    if (user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
  }
})

// ===================== Delete Code ===================== 

client.on("messageCreate", message => {
  // if(message.author.bot) return;  
  //let autoDelet = ['lol','yes']
  for (let index = 0; index < autoDelet.length; index++) {
    const element = autoDelet[index];
    if (chnldel.includes(message.channel.id)) {
      if (message.content.includes(element)) {
        message.delete().catch(err => { })
      }
    }
  }
});


// ===================== Uptime Command ===================== \\

client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have perms**`)
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
    let embed = new Discord.MessageEmbed()
      .setColor("#020101")
      .setTitle(`uptime:`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
})

// ===================== Give Role Command ===================== \\

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "g-role")) {

    const theRole = message.mentions.roles.first();

    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply('**Please Mention A User !**')

    if (!theRole) return message.reply('**Please Mention A Role !**')

    theUser.roles.add(theRole)
      .then(() => {
        message.reply("Done ✅")
      })
      .catch((t) => {
        message.reply("Error 🚫 : " + t.message)
      })
  }
})

// ===================== Remove Role Command ===================== \\

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "r-role")) {

    const theRole = message.mentions.roles.first();

    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply('**Please Mention A User !**')

    if (!theRole) return message.reply('**Please Mention A Role !**')

    theUser.roles.remove(theRole)
      .then(() => {
        message.reply("Done ✅")
      })
      .catch((t) => {
        message.reply("Error 🚫 : " + t.message)
      })
  }
})

// =====================  Auto Line ProBot Command ===================== \\

client.on('message', message => {
  if (message.content.includes('has transferred')) {
    if (message.channel.id !== TransferChannel) return;

    const TransformEmbed = new Discord.MessageEmbed()
      .setImage(`${Line}`)
      .setColor("ORANGE")
    message.channel.send({ embeds: [TransformEmbed] })

  }
})

// =====================  Link Server Command ===================== \\

client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

    message.reply(`
> \`-\` **My Link :** ${LinkServer}

> \`/\` **𝖧𝖺𝗏𝖾 𝖥𝗎𝗇 𝖶𝗂𝗍𝗁 𝖴𝗌**   
`)

  }
})

// =====================  Tax Command ===================== \\


client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
      console.log(err.message)
    });

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

    let embed = new MessageEmbed()

      .setAuthor(`TAX Arab Hosting`, client.user.avatarURL({ dynamic: true }))

      .setThumbnail(client.user.avatarURL({ dynamic: true }))

      .addFields([
        {
          name: `الضريبه : `,
          value: `${tax}`
        },
        {
          name: `ضريبة الوسيط : `,
          value: `${tax4}`
        }
      ])
      .setColor(message.guild.me.displayColor)
      .setTimestamp()

    message.reply({ embeds: [embed] }).catch((err) => {
      console.log(err.message)
    });
  }
});

// ===================== Inrole Command ===================== \\

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "inrole")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (message.author.bot) return;
    let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
    if (!trole) {
      return message.reply(`**:rolling_eyes: Please mention role id**`)
    } else {
      const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
      message.reply({
        embeds: [
          new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .addFields([
              {
                name: `List of users in ${trole.name} role : (${trole.members.size})`,
                value: `**${roleMember}**`
              },
            ])
            .setColor(message.guild.me.displayHexColor)
            .setFooter(`Members in this role ${trole.members.size}`)]
      })
    }
  }
})

// ===================== Avatar Command ===================== \\

client.on("messageCreate", message => {
  var cmd = message.content.split(' ')[0]
  if (cmd == prefix + "avatar" || cmd == "A" || cmd == "a") {
    let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;

    var embed = new MessageEmbed()
      .setTitle('Download avatar')
      .setURL(user.user.avatarURL({ dynamic: true, size: 512 }))
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))

      .setImage((user.user.avatarURL({ dynamic: true, size: 512 })))

      .setColor(message.guild.me.displayHexColor)
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true }));
    message.reply({ embeds: [embed] });
  }
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function(channel) {
    return channel.send(`**__Welcome to Server. We use bot system with many commands__** : **Public Commands, Admin Commands, Store Commands.**
  
  
> **~~Made By~~** <@520584461172080640>

> **~~For Support~~** : https://www.youtube.com/@dexter.exe99`)
  }).catch(console.error)

})
// ===================== Mute Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'mute')) {

    let args = message.content.split(" ").slice(1).join(" ");

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    var time = args[1]
    if (!time) time = '24h'

    const permission = message.member.permissions.has("MANAGE_ROLES");
    const guilds = message.guild.me.permissions.has("MANAGE_ROLES");

    if (!permission)
      return message.reply(
        { content: ":x: **You don't have permission to use this command**", ephemeral: true }
      ).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })


    if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (member.id === message.member.id)
      return message.reply({ content: `:rolling_eyes: **You can't mute ${member.user.username}**`, ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply({
        content:
          `:rolling_eyes: **You can't mute ${member.user.username} have higher role than you**`
        , ephemeral: true
      }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't mute that user. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    let muteRole = message.guild.roles.cache.find((role) => role.name == "Mute");
    if (!muteRole) {
      message.guild.roles.create({
        name: "Mute",
      }).then((createRole) => {
        message.guild.channels.cache.filter((c) => c.type == "GUILD_TEXT").forEach(c => {
          c.permissionOverwrites.edit(createRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        })
        message.reply({ content: `:x: **Muted role is not created. please run the command again.**`, ephemeral: true }).catch((err) => {
          console.log(`i couldn't reply to the message: ` + err.message)
        })
      })
    } else {
      message.guild.members.cache.get(member.id)?.roles.add(muteRole);
      message.reply({ content: `:white_check_mark: **${member.user.username} muted from the text! :zipper_mouth:**`, ephemeral: true }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })
      db.set(`MutedMember_${member.id}`, 'True')

      setTimeout(async () => {
        await member.roles.remove(muteRole)
        db.set(`MutedMember_${member.id}`, 'False')
        message.reply({ content: `:white_check_mark: **${member.user.username} Is now unmuted!**`, ephemeral: true }).catch((err) => {
          console.log(`i couldn't reply to the message: ` + err.message)
        })
      }, ms(time));
    }
  }
});

// ===================== UnMute Command ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'unmute')) {
    let args = message.content.split(" ").slice(1).join(" ");

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const permission = message.member.permissions.has("MANAGE_ROLES");
    const guilds = message.guild.me.permissions.has("MANAGE_ROLES");
    if (!permission) return message.reply({ content: ":x: **You don't have permission to use this command**" }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (member.id === message.member.id) return message.reply({ content: `:rolling_eyes: **You can't use this on your self**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (message.member.roles.highest.position < member.roles.highest.position) return message.reply({ content: `:rolling_eyes: **You can't unmuted ${member.user.username} have higher role than you**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't unmute that user. Please check my permissions and role position.**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)
    })

    let muteRole = message.guild.roles.cache.find((role) => role.name == "Mute");
    if (!member.roles.cache.some((role) => role.name == "Mute")) {
      message.reply({ content: `:rolling_eyes: **${member.user.username} is not muted.**` }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })
    } else {
      member.roles.remove(muteRole);
      message.reply({ content: `:white_check_mark: **${member.user.username} unmuted from the text!**` }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
      })
    }
  }
});

// =====================  SetActivity Command ===================== \\

client.on('messageCreate', message => {
  if (message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
    if (!OwnerBot.includes(message.author.id)) return;
    const oy = message.content.split(" ").slice(1).join(" ");
    if (!oy) return message.reply("اكتب حاله جديده يا معلم")
    client.user.setPresence({ activities: [{ name: oy }], status: 'online' }); return message.reply(`** done set bot Presence to ${oy} ** `)
  }
});

// =====================  SetPerfix Command ===================== \\

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "setprefix")) {
    if (!OwnerBot.includes(message.author.id)) return;
    const args = message.content
      .slice(1)
      .trim()
      .split(/ +/);
    if (!args[1]) return message.channel.send(`**Please Write New Prefix!**`);
    db.set("prefix", args[1]);
    message.channel.send(
      `**Prefix Successfuly Changed To : \`${args[1]}\`**`
    );
  }
});

// =====================  SetAvatar Command ===================== \\

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "setavatar")) {
    if (!OwnerBot.includes(message.author.id)) return;
    let avLink = message.content.substr(`${prefix}setavatar `.length);
    if (!avLink) return message.channel.send("**Incorrect Link,Please Put Avatar Link!**");
    client.user.setAvatar(avLink).then(() => {
      message.delete()
      message.channel.send('**Bot Avatar Has Been Changed ✅**')

    }).catch(() => {
      message.channel.send('**Error Try Again Later! 🚫 : Incorrect Link Or Ratelimit**')
    })
  }
})

