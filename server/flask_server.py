# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import util

# app = Flask(__name__)
# CORS(app)  # This will enable CORS for all routes

# @app.route('/get_location_names', methods=['GET'])
# def get_location_names():
#     response = jsonify({
#         'locations': util.get_location_names()
#     })
#     return response

# @app.route('/predict_home_price', methods=['GET', 'POST'])
# def predict_home_price():
#     total_sqft = float(request.form['total_sqft'])
#     location = request.form['location']
#     bhk = int(request.form['bhk'])
#     bath = int(request.form['bath'])

#     response = jsonify({
#         'estimated_price': util.get_estimated_price(location, total_sqft, bhk, bath)
#     })
#     return response

# if __name__ == "__main__":
#     print("Starting Python Flask Server For Home Price Prediction...")
#     util.load_saved_artifacts()
#     app.run()



from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import util

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')
# CORS(app)  # This will enable CORS for all routes
CORS(app, resources={r"/api/": {"origins": ""}})

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    try:
        data = request.get_json()  # Parse JSON data from the request
        print("Received data:", data)  # Print received data for debugging

        if not data:
            return jsonify({'error': 'No data provided'}), 400

        total_sqft = float(data.get('total_sqft'))
        location = data.get('location')
        bhk = int(data.get('bhk'))
        bath = int(data.get('bath'))

        # Example function, replace with your actual logic
        estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

        return jsonify({'estimated_price': estimated_price})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 400


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and (path.endswith('.js') or path.endswith('.css') or path.endswith('.png') or path.endswith('.ico')):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run(debug=True)