import os
from flask import Flask, render_template, url_for, jsonify, request
from flask_pymongo import PyMongo
from passlib.hash import pbkdf2_sha256
import uuid


# Classes
class User:

    def signup(self):

        # Create the User Object
        user = {
            '_id': uuid.uuid4().hex,
            'name': request.form.get('name'),
            'email': request.form.get('email'),
            'password': request.form.get('password')
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])


        # Check for existing email adress
        if users.find_one({'email': user['email']}):
            return jsonify({'error': 'Email adress already in use'}), 400

        if user.insert_one(user):
            return jsonify(user), 200

        return jsonify({"error": "Signup_failed"}), 400


app = Flask(__name__)


# Database
app.config['MONGO_DBNAME'] = 'Recipe_Pot'
app.config['MONGO_URI'] = os.getenv('MONGO_URI')

mongo = PyMongo(app)
users = mongo.db.user_login_system


# Routes
@app.route('/')
@app.route('/home/')
def home_page():
    return render_template('index.html')


@app.route('/about/')
def about_page():
    return render_template('about.html')


@app.route('/contact_us/')
def contact_page():
    return render_template('contact.html')


@app.route('/sign_up/')
def signup_page():
    return render_template('signup.html')


@app.route('/user/signup', methods=['GET', 'POST'])
def signup():
    user = User()
    return user.signup()


if __name__ == '__main__':
    app.run(host=os.getenv('IP'),
            port=int(os.getenv('PORT')),
            debug=True)
