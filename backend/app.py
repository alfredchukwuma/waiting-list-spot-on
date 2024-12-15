from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    return jsonify({"message": "User signed up!", "data": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
