import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEN_API_KEY)

export const generatePoem = async (
  occasion?: string,
  emotion?: string,
  theme?: string,
  about?: string,
  style?: string,
  length?: string
) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    // Base prompt
    let prompt = `Write a ${length} poem in the style of ${style}.`

    if (occasion) {
      prompt += ` The poem should capture the essence of a ${occasion}.`
    }
    if (emotion) {
      prompt += ` Evoke the emotion of ${emotion} in the reader.`
    }
    if (theme) {
      prompt += ` Explore the theme of ${theme}.`
    }
    if (about) {
      prompt += ` Focus on ${about} as the subject.`
    }

    if (style === 'acrostic') {
      prompt += ` Use the theme or emotion to create an acrostic poem.`
    } else if (style === 'ballad') {
      prompt += ` Tell a story with a simple rhyme scheme and meter.`
    } else if (style === 'elegy') {
      prompt += ` Mourn the loss of someone or something.`
    } else if (style === 'epic') {
      prompt += ` Tell a grand story of heroic deeds and adventure.`
    } else if (style === 'free verse') {
      prompt += ` Use vivid imagery and metaphors to create a powerful message.`
    } else if (style === 'ghazal') {
      prompt += ` Follow the traditional ghazal structure with rhyming couplets and a central theme.`
    } else if (style === 'haiku') {
      prompt += ` Capture the essence of the moment in just 17 syllables.`
    } else if (style === 'limerick') {
      prompt += ` Write a humorous five-line poem with an AABBA rhyme scheme.`
    } else if (style === 'ode') {
      prompt += ` Praise or celebrate a person, place, or object.`
    } else if (style === 'sonnet') {
      prompt += ` Follow the traditional sonnet structure with 14 lines and specific rhyme scheme.`
    } else if (style === 'villanelle') {
      prompt += ` Use a complex repeating rhyme scheme and refrain to create a layered effect.`
    }

    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
  } catch (error) {
    console.log(error)
  }
}
