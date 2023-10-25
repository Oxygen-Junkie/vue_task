export default class Reply {
    comment?: string
    childReplies: Reply[]

    constructor() {
      this.childReplies = []
    }
  }
  