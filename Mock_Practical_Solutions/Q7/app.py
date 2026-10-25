from flask import Flask, render_template, request

app = Flask(__name__)
app.secret_key = 'webx_secret_key'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Capture submitted data from either JSON (Thunder Client) or HTML Form
        payload = request.get_json(silent=True) or request.form
        
        name = payload.get('name', 'Shivam Pimple')
        email = payload.get('email', 'shivampimple29@student.sfit.ac.in')
        message = payload.get('message', 'Full-Stack Development with Flask & Python')

        # Jinja2 auto-escapes variables preventing XSS for secure dynamic display
        return render_template('confirmation.html', name=name, email=email, message=message)

    # Render form for GET requests
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
