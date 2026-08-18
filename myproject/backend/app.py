from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/search", methods = ['POST'])
def searchData():
    data = request.get_json()
    searchParm = data.get('q')
    
    return jsonify({"message": searchParm})

if __name__ == "__main__":
    app.run(debug=True)