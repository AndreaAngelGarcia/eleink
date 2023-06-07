import { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

export function Tittle({ title }) {
    const [isVisible, setIsVisible] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const componentPosition = ref.current.offsetTop;

            setIsVisible(scrollTop + windowHeight > componentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    });

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section ref={ref}>
            <animated.h2
                className="italianno flex justify-center text-7xl font-medium text-gray-900"
                style={animation}
            >
                {title}
            </animated.h2>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9999,
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '90%',
                        maxHeight: '90%',
                        border: 'none',
                        borderRadius: '8px',
                        overflow: 'auto',
                        outline: 'none',
                        padding: '20px',
                    },
                }}
            ></ReactModal>
        </section>
    );
}

Tittle.propTypes = {
    title: PropTypes.string.isRequired,
};
