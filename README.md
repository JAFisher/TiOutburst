Little about Utterance
----------------------
A simple text to speech Module for IOS via Titanium.
It free to use (buy me a pizza sometime if you like it)
and was written by me (Jamie Fisher).

Please feel free to report bugs i'll try get on it or requested features.
(can't promise anything though -.^).

Initialization
--------------
```
var utter = require("com.jamiefisher.utterance");
```
Objects Constructs
------------------
**@UtteranceConstruct**: Utterance is what you want to be said in an paragraph, it is configurable to the following parameters.

**@text**: **@String** is what you want to spoken

    Required: YES

**@rate** : **@Float** the speed at which you want it to be spoken.

    Default: 1.0

**@volume**: **@Float** the volume level of the spoken Utterance.

    Min: value 0.1
    Max: 1.0
    Default: 1.0
**@language**:  Specifies the BCP-47 language tag that represents the voice.

    Default: is the device locale.
    Supported languages specified below.

Events
------

**@talk** : Expects Array of UtteranceConstructs
```
utter.talk([UtteranceConstructs]);
```
**@talk** is the only method for starting the text to speech.
```
It accepts an Array of Utterance Objects
```
**@pauseTalking** : will stop the current utterClass from talking the state can be **@resume** to keep on talking
```
utter.pauseTalking();
```
**@resume:** will carry on talking where it left off from an @pause.
```
utter.resume();
```
**@showAvailableLanguages:** @returns Array of language Codes available to
use with utterance.
```
utter.showAvailableLanguages
```
----
Supported Languages
```
  ar-SA
  cs-CZ
  da-DK
  de-DE
  el-GR
  en-AU
  en-GB
  en-IE
  en-US
  en-ZA
  es-ES
  es-MX
  fi-FI
  fr-CA
  fr-FR
  hi-IN
  hu-HU
  id-ID
  it-IT
  ja-JP
  ko-KR
  nl-BE
  nl-NL
  no-NO
  pl-PL
  pt-BR
  pt-PT
  ro-RO
  ru-RU
  sk-SK
  sv-SE
  th-TH
  tr-TR
  zh-CN
  zh-HK
  zh-TW
```

In the pipeline
---------------

**10th July**

Changes to utterance to allow delays between paragraphs.

UtteranceConstruct:beforeDelay

UtteranceConstruct:afterDelay

Going to add a varity of events including when a paragraph has finished been read, when the entire utterance collection is finished and hopefully something cool word by word tracking.