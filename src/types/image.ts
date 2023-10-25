export default class Image {
    link: string
    name: string
    description: string
    date: string
  
    constructor(link: string, name: string, description: string, date: string) {
      this.link = link
      this.name = name
      this.description = description
      this.date = date
    }
  }
  