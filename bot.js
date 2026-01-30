const axios = require("axios")
require("dotenv").config()


async function register(name){
    try {
        await axios.post(process.env.CHANNEL_WEBHOOK_URL, {
            // content: `${name} 
            embeds: [
                {
                    title: 'El function dy kman sha8ala',
                    description: 'Description el embed sha8al bardo lon azra2 el mafroud',
                    color: 0x78a3cf,
                    fields: [
                        {
                            name: `user name`,
                            value: name
                        },
                        {
                            name: `date:`,
                            value: new Date()
                        }
                    ],
                    footer: {
                        text:`footer sha8al bardo 100% check bs 3la el lon w el icon keda`,
                        icon_url: `https://www.pngplay.com/wp-content/uploads/12/Meme-Emojis-Free-PNG.png`
                    },
                    image: {
                        url: `https://www.pngplay.com/wp-content/uploads/12/Meme-Emojis-Free-PNG.png`
                    }
                }
            ]
        })

        console.log(`message sent successfully to channel`)
    } catch (error) {
        console.error(error.message)
    }
}

register(`TESTING`)
register(`TESTING`)
register(`TESTING`)
