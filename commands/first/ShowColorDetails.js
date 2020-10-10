const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const colors = require("../resources/colors.json");
const convert = require("color-convert");

module.exports = class ShowColorDetails extends Command {
  constructor(client) {
    super(client, {
      name: "colorcode",
      aliases: ["cc"],
      group: "first",
      memberName: "colorcode",
      description: "Show the details of a color!",
      args: [
        {
          key: "color",
          type: "string",
          prompt: "Color you want the details of.",
        },
      ],
    });
  }

  getFullLengthHex(hex = "#000000") {
    hex = hex.substring(1);

    if (hex.length === 3) {
      return hex.split("").reduce((tHex, value) => {
        return `${tHex}${value}${value}`;
      }, "");
    }
    return hex;
  }

  createColorNotFoundEmbed(color) {
    return new MessageEmbed()
      .setTitle(`${color}`)
      .setDescription("*Sorry, color doesn't exist*")
      .setTimestamp()
      .setFooter("Cryo Bot");
  }

  createColorEmbed(color) {
    const colorHex = this.getFullLengthHex(color.hex);
    return new MessageEmbed()
      .setColor(colorHex)
      .setTitle(`${color.name}`)
      .addFields(
        { name: "HEX", value: `\`#${colorHex}\``, inline: true },
        {
          name: "RGB",
          value: `\`${color.rgb}\``,
          inline: true,
        },
        {
          name: "HSL",
          value: `\`${convert.hex.hsl(colorHex)}\``,
          inline: true,
        },
        {
          name: "HSV",
          value: `\`${convert.hex.hsv(colorHex)}\``,
          inline: true,
        },
        {
          name: "HWB",
          value: `\`${convert.hex.hwb(colorHex)}\``,
          inline: true,
        }
      )
      .addFields(
        {
          name: "CMYK",
          value: `\`${convert.hex.cmyk(colorHex)}\``,
          inline: true,
        },
        {
          name: "ANSI16",
          value: `\`${convert.hex.ansi16(colorHex)}\``,
          inline: true,
        },
        {
          name: "ANSI256",
          value: `\`${convert.hex.ansi256(colorHex)}\``,
          inline: true,
        },
        {
          name: "CSS Keyword",
          value: `\`${convert.hex.keyword(colorHex)}\``,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter("Cryo Bot");
  }

  run(message, { color }) {
    const selectedColor = colors[color];
    if (selectedColor) {
      const embedMessage = this.createColorEmbed(selectedColor);
      return message.embed(embedMessage);
    }
    return message.embed(this.createColorNotFoundEmbed(color));
  }
};
