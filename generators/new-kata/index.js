const Generator = require('yeoman-generator')
const { fetchKata } = require('./KataFetcher')

const OUTPUT_DIR_ROOT = 'katas'

module.exports = class KataGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.kataUrl = args[0]
  }

  async createNewKataDirectory() {
    const kata = await fetchKata(this.kataUrl)
    const outputDirectory = `${OUTPUT_DIR_ROOT}/${kata.slug}`

    const asdf = [
      ['Kata.md.template', 'README.md'],
      ['Solution.test.ts.template', 'Solution.test.ts'],
      ['Solution.ts.template', 'Solution.ts'],
    ]

    return Promise.all(
      asdf.map(([from, to]) =>
        this.fs.copyTpl(this.templatePath(from), this.destinationPath(`${outputDirectory}/${to}`), kata),
      ),
    )
  }
}
