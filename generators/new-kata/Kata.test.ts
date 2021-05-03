import { Kata } from './Kata'

describe('Kata test suite', () => {
  it('Creates Kata record', () => {
    const response = {
      slug: 'test-slug',
      name: 'Test',
      description: 'Test description',
      languages: ['javascript'],
    }

    expect(new Kata(response).toJson()).toEqual({
      slug: 'test-slug',
      name: 'Test',
      description: 'Test description',
      languages: ['javascript'],
    })
  })

  it('Throws error for missing slug', () => {
    expect(() => new Kata({}).toJson()).toThrowError(/slug/)
  })

  it('Throws error for missing name', () => {
    expect(() =>
      new Kata({
        slug: 'test-slug',
      }).toJson(),
    ).toThrowError(/name/)
  })

  it('Throws error for missing description', () => {
    expect(() =>
      new Kata({
        slug: 'test-slug',
        name: 'name',
      }).toJson(),
    ).toThrowError(/description/)
  })

  it('Throws error for missing languages', () => {
    expect(() =>
      new Kata({
        slug: 'test-slug',
        name: 'name',
        description: 'description',
      }).toJson(),
    ).toThrowError(/languages/)
  })

  it('Throws error for unsupported languages', () => {
    expect(() =>
      new Kata({
        slug: 'test-slug',
        name: 'name',
        description: 'description',
        languages: ['java'],
      }).toJson(),
    ).toThrowError(/supported languages \(js or ts\)/)
  })
})
