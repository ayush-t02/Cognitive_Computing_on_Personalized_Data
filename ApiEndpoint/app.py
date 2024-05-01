from flask import Flask, jsonify, request, send_file
import requests
import io
from PIL import Image
from googleapiclient.discovery import build
from flask_cors import CORS  # Import CORS from flask_cors
# from audio_processor import pipe
import traceback
import re
import os

import json

from io import BytesIO
from gradio_client import Client
from pydub import AudioSegment
import time



app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# speech_recognizer = SpeechRecognizer()

API_URL_text_to_image = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
API_URL_image_to_text = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
API_URL_audio_to_text = "https://api-inference.huggingface.co/models/distil-whisper/distil-large-v2"

HEADERS = {"Authorization": "Bearer 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"}

ytvideoXtext = Client("https://rehman1603-video-to-text.hf.space/")


# textXaudio = Client("https://haoheliu-audioldm-text-to-audio-generation.hf.space/")

def get_video_details(video_id):
    youtube = build('youtube', 'v3', developerKey='AIzaSyBmIvloIa6fEW-BwaSsDLJRwwH8lZvW5Os')
    request = youtube.videos().list(part='snippet,statistics', id=video_id)
    response = request.execute()
    return response


def query_audio_to_text(data):
    response = requests.post(API_URL_audio_to_text, headers=HEADERS, data=data)
    return response.json()


def get_youtube_video_id(url):
    # Regular expression to find the video ID
    regex = r"(?<=v=)[\w-]+(?![^&\s])"

    # Search for the pattern in the URL
    match = re.search(regex, url)

    # If match found, return the video ID
    if match:
        return match.group(0)
    else:
        return None


def query_text_to_image(payload):
    response = requests.post(API_URL_text_to_image, headers=HEADERS, json=payload)
    print(response.content)
    return response.content


def query_image_to_text(image_data):
    response = requests.post(API_URL_image_to_text, headers=HEADERS, data=image_data)
    return response.json()


@app.route('/api/textToImage', methods=['POST'])
def textToImage():
    try:
        print(request.json)
        payload = request.json
        image_bytes = query_text_to_image(payload)
        image = Image.open(io.BytesIO(image_bytes))
        # Do further processing with the image if needed
        return send_file(io.BytesIO(image_bytes), mimetype='image/jpeg')
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/imageToText', methods=['POST'])
def image_to_text():
    try:
        print(request.files['image'])
        image_data = request.files['image'].read()
        output = query_image_to_text(image_data)
        print("Output text:", output)
        return jsonify(output)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/videoToText', methods=['POST'])
def video_to_text():
    try:
        youtube_url = request.json['youtube_url']
        print(youtube_url)
        # model_name = request.json['model_name']

        result = ytvideoXtext.predict(youtube_url, "BART", api_name="/predict")
        print(result)
        if (result == None):
            id = get_youtube_video_id(youtube_url)
            details = get_video_details(id)
            title = details['items'][0]['snippet']['title']
            channel_name = details["items"][0]["snippet"]["channelTitle"]
            print(f'Title: {title, channel_name}')
            # Convert the dictionary to JSON
            response_json = json.dumps({"type": "yt", "title": title, "channel_name": channel_name})
            return response_json
        response_json = json.dumps({"type": "model", "result": result})
        print(response_json)
        return response_json
    except Exception as e:
        # Print the exception traceback
        traceback.print_exc()
        # Return error message in case of any exception
        return jsonify({"error": str(e)}), 500

@app.route('/api/audioToText', methods=['POST'])
def audio_to_text():
    try:
        if 'audio' not in request.files:
            return jsonify({'error': 'No audio file provided'}), 400

        audio_file = request.files['audio']
        print(audio_file)
        temp_file_path = "temp-file.mp3"
        audio_file.save(temp_file_path)

        with open(temp_file_path, "rb") as f:
            data = f.read()

            # Remove the temporary file
        os.remove(temp_file_path)
        # Save the audio file temporarily
        # temp_file_path = 'temp_audio.wav'
        print(data, "jajaja")

        # Read the file data

        # Perform ASR
        result = query_audio_to_text(data)
        print(result)

        # Extract the transcription from the result
        transcription = result['text']

        # Return the transcription as JSON response
        return jsonify({"transcription": transcription})
    except Exception as e:
        # Print the exception traceback
        traceback.print_exc()
        # Return error message in case of any exception
        return jsonify({"error": str(e)}), 500

# @app.route('/api/textToAudio', methods=['POST'])
# def text_to_audio_route():
#     data = request.get_json()
#     text = data.get('text', '')
#     voice = data.get('voice', 0)  # Default to male voice if not specified
#
#     # Set the voice based on choice
#     voice_path = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Speech\\Voices\\Tokens\\TTS_MS_EN-US_ZIRA_11.0' if voice else 'english+f3'
#
#     output_file = 'output.mp3'
#     text_to_audio(text, voice_path, output_file)
#
#     # Send audio file
#     return send_file(output_file, as_attachment=True)


# @app.route('/api/textToAudio', methods=['POST'])
# def text_to_audio():
#     # Get data from the request
#     input_text = request.json['input_text']
#     negative_prompt = request.json['negative_prompt']
#     duration_seconds = request.json['duration_seconds']
#     guidance_scale = request.json['guidance_scale']
#     seed = request.json['seed']
#     num_waveforms = request.json['num_waveforms']

    

#     # Make prediction using gradio_client
#     result = textXaudio.predict(input_text, negative_prompt, duration_seconds, guidance_scale, seed, num_waveforms, fn_index=0)

#     with open(result, 'rb') as audio_file:
#         audio_content = audio_file.read()

#     # Remove the temporary audio file
#     os.remove(result)
#     # Return the result as JSON
#     return send_file(BytesIO(audio_content), mimetype='audio/mpeg')

# @app.route('/api/transcribe', methods=['POST'])
# def transcribe_audio():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'}), 400

#     audio_file = request.files['file']

#     if audio_file.filename == '':
#         return jsonify({'error': 'No selected file'}), 400
    
#     # audio_data = AudioSegment.from_file(BytesIO(audio_file.read()))
#     # audio_data.export("temp_audio.wav", format="wav")

#     transcription = speech_recognizer.recognize_speech(audio_file)

#     return jsonify({'transcription': transcription})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
