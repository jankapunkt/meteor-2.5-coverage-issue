if (Meteor.isClient) {
  describe('client', function () {
    import '../client/mul.tests'
  })
}

if (Meteor.isServer) {
  describe('server', function () {
    import '../server/sub.tests'
  })
}

describe('both', function () {
  import '../imports/add.tests'
})

