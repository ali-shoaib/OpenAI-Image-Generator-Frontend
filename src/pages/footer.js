import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
            <form action="">
            <div className="d-flex justify-content-around align-items-end">
                <div>
                    <p className="pt-3">
                        <strong>Sign up for our newsletter</strong>
                    </p>
                    <div className="form-outline mb-2">
                        <input type="email" placeholder='Enter Email...' className="form-control signup" />
                    </div>
                    </div>

                    <div>
                    <button type="submit" disabled className="btn btn-primary mb-4">
                        Subscribe
                    </button>
                </div>
            </div>
            </form>
        </div>

        <div className="text-center p-3" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>
            © {new Date().getFullYear()} Copyright:
            <a className="text-dark" href="https://openai.com/"> openai.com</a>
        </div>
        </footer>
    </div>
  )
}

export default Footer