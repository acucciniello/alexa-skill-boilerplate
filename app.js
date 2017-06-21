var Alexa = require('alexa-app')

var app = new Alexa.app('app') // eslint-disable-line

app.launch(function (request, response) {
  var launchOutput = 'Welcome to Your Skill.  The purpose of this skill is...  To start using the skill, say Alexa, ask ....'
  response.say(launchOutput)
  response.shouldEndSession(false)
})

app.intent('AMAZON.HelpIntent', {
  'slots': {},
  'utterances': []
}, function (request, response) {
  var helpOutput = 'Welcome to Your Skill.  The purpose of this skill is...  To start using the skill, say Alexa, ask .... What would you like to do?'
  response.say(helpOutput)
  response.shouldEndSession(false)
})

app.intent('AMAZON.StopIntent', {
  'slots': {},
  'utterances': []
}, function (request, response) {
  var stopOutput = 'Stopping your Request and Exiting Skill'
  response.say(stopOutput).send()
})

app.intent('AMAZON.CancelIntent', {
  'slots': {},
  'utterances': []
}, function (request, response) {
  var cancelOutput = 'Canceling your Request and Exiting Skill'
  response.say(cancelOutput).send()
})

app.intent('SampleIntent', {
  'slots': {},
  'utterances': ['to say the skill', 'to tell me the name', 'to recite the time']
}, function (request, response) {
  var output = 'Hi there'
  response.say(output).send()
})

module.exports = app
