exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

🔴 INFO BOT! :

=> *AUTHOR*: DARIS
=> *YOUTUBE*: METABOT

🔴 INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
g
♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${089693848709}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✅Official Grub [1] : ${https://chat.whatsapp.com/LJQK3L8Hi7o5zXV1kgOeoN}

✅Official Grub [2] : ${https://chat.whatsapp.com/Lt9It9zBSJcFUagwZod6g4}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
