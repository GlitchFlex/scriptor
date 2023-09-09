import { Modal } from 'antd';
import React from 'react';
import './OutputModal.css';

function OutputModal({ css, js, html, isModalOpen, setIsModalOpen }) {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const combiner = () => {
        let output = `
         <html>
             <head>
                 <style>
                    
                     ${css}
                 </style>
             </head>
             <body>
                     ${html}
                 <script>
                     ${js}
                 </script>
             </body>
         </html>
         `;

        return output;
    };

    let result = combiner();

    return (
        <Modal
            open={isModalOpen}
            width={1000}
            // height = {800}
            onCancel={handleCancel}
            closeIcon={null}
            maskStyle={{backdropFilter : "blur(10px)"}}
            wrapClassName="wrapper"
            bodyStyle={{
                borderRadius: 'none',
                padding: '0',
                height : "800",
                margin: '0',
                backgroundColor: '#1d1e19',
                boxShadow : "none"
            }}
            footer={null}
        >
            <iframe
                className="output-frame"
                // ref={iframeRef}
                id="i-frame"
                title="outputModal"
                srcDoc={result}
                style={{ border: 'none', height: '100%', width: '100%' }}
            ></iframe>
        </Modal>
    );
}

export default OutputModal;
