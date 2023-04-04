import React from 'react'

const ChangePassword: React.FC = () => {
    return (
        <>
            <section style={{ height: '700px' }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pt-3">
                                <h1 style={{ fontSize: '38px', color: '#464646', fontWeight: '600' }}>Set new password</h1>
                                <p style={{ fontSize: '20px', color: '#9F9F9F', fontWeight: '400' }}>Your new password must be different from previously used passwords.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            Form
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChangePassword