const { intersection } = require('ramda')

class KataParsingError extends Error {
  constructor(missingPart) {
    super(`Codewars Kata error: missing ${missingPart}`)
  }
}

class Kata {
  constructor(response) {
    if (!response.slug) {
      throw new KataParsingError('slug')
    }
    if (!response.name) {
      throw new KataParsingError('name')
    }
    if (!response.description) {
      throw new KataParsingError('description')
    }
    if (!response.languages) {
      throw new KataParsingError('languages')
    }
    if (!this._hasJavascriptExamples(response.languages)) {
      throw new KataParsingError('supported languages (js or ts)')
    }

    this.slug = response.slug
    this.name = response.name
    this.description = response.description
    this.languages = this._extractSupportedLanguages(response.languages)
  }

  toJson() {
    return {
      slug: this.slug,
      name: this.name,
      description: this.description,
      languages: this.languages,
    }
  }

  _hasJavascriptExamples(languages) {
    return this._extractSupportedLanguages(languages).length > 0
  }

  _extractSupportedLanguages(languages) {
    return intersection(languages, ['javascript', 'typescript'])
  }
}

module.exports = {
  Kata,
}
