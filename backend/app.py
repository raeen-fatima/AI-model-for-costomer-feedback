from flask import Flask, request, jsonify
from transformers import pipeline
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # allow React to talk to Flask

# Sentiment model
sentiment = pipeline("sentiment-analysis")

# Home route
# @app.route('/')
# def home():
#     return render_template('index.html')

# Analyze route
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    rating = int(data.get("rating", 3))

    # Model prediction
    result = sentiment(text[:512])[0]
    label = result['label']

    # Categorize
    if label == "NEGATIVE" and rating <= 2:
        category = "High Urgency"
    elif label == "POSITIVE" and rating >= 4:
        category = "High Impact"
    else:
        category = "Medium"

    return jsonify({
        "sentiment": label,
        "category": category
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)
