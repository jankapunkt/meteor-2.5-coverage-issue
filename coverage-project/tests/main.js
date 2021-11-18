if (Meteor.isClient) {
  describe('client', function () {
    import '../client'
  })
}

if (Meteor.isServer) {
  describe('server', function () {
    import '../server'
  })
}

describe('both', function () {
  import '../imports'
})

