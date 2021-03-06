import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @media (max-width: 649px) {
        .modal-wrapper {
            .modal {
                margin: 0 !important;
                margin-bottom: -15px !important;
                border-radius: 14px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                position: fixed;
                bottom: 0;
            }
        }
    }
`;