# import pyttsx3

# engine = pyttsx3.init()
# # engine.setProperty('voice', 'english-in')
# # engine.setProperty('voice', 'english+f3')
# i = int(input("enter 1 for female voice and 0 for male voice : "))

# if i:
# # Set the voice to Zira (female)
#     engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0')
# else:
#     engine.setProperty('voice', 'english+f3')

# with open('data\pptts.txt', 'r') as file:
#      text = file.read()

# engine.say(text)
# engine.runAndWait()



# engine = pyttsx3.init()
# voices = engine.getProperty('voices')

# for voice in voices:
#     print("Voice:", voice.id)


# import pyttsx3
#
# def text_to_audio(text, voice='english+f3', output_file='output.mp3'):
#     engine = pyttsx3.init()
#     engine.setProperty('voice', voice)
#     engine.save_to_file(text, output_file)
#     engine.runAndWait()