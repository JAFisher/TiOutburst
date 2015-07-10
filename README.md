Little about outburst
----------------------
A simple text to speech Module for IOS via Titanium.
It free to use (buy me a pizza sometime if you like it)
and was written by me (Jamie Fisher).

Please feel free to report bugs i'll try get on it or requested features.
(can't promise anything though -.^).

Initialization
--------------
```
var outburst = require("com.jamiefisher.outburst");
```
Objects Constructs
------------------
**@OutburstContruct**: outburst is what you want to be said in an paragraph, it is configurable to the following parameters.

**@text**: **@String** is what you want to spoken

    Required: YES

**@rate** : **@Float** the speed at which you want it to be spoken.

    Default: 1.0

**@volume**: **@Float** the volume level of the spoken outburst.

    Min: 0.1
    Max: 1.0
    Default: 1.0
**@language**:  Specifies the BCP-47 language tag that represents the voice.

    Default: is the device locale.
    Supported languages specified below.

Events
------

**@talk** : Expects Array of OutburstContructs
```
outburst.talk([OutburstContructs]);
```
**@talk** is the only method for starting the text to speech.
```
It accepts an Array of OutburstContruct Objects
```
**@pauseTalking** : will stop the current outburstClass from talking the state can be **@resume** to keep on talking
```
outburst.pauseTalking();
```
**@resume:** will carry on talking where it left off from an @pause.
```
outburst.resume();
```
**@showAvailableLanguages:** @returns Array of language Codes available to
use with outburst.
```
outburst.showAvailableLanguages
```
EventListeners
--------------
**@paragraphRead**: is triggered when a paragraph ie outburstConstruct is finished being spoken. it @return an object with the follow keys

  paragraphIndex: Integer @index

```
outburst.addEventListener("paragraphRead", function(e){
  console.log(e.paragraphIndex, "has been read.");
});
```

Supported Languages
-------------------
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

Changes to outburst to allow delays between paragraphs.

OutburstContruct:beforeDelay

OutburstContruct:afterDelay

Going to add a varity of events including when a paragraph has finished been read, when the entire outburst collection is finished and hopefully something cool word by word tracking.