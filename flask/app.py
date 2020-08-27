import os
from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route('/')
@app.route('/home/')
def home_page():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host=os.getenv('IP'),
            port=int(os.getenv('PORT')),
            debug=True)
