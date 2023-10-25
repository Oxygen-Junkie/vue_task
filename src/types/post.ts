import type Image from "./image"
import type Reply from "./reply"

export default class Post {
  title: string
  image: Image
  content: string
  replies: Reply[]

  constructor(title: string, image: Image, content: string) {
    this.title = title
    this.image = image
    this.content = content
    this.replies = []
  }
}
