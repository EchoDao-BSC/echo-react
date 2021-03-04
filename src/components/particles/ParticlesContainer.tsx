import React from 'react';
import Particles from 'react-tsparticles';

interface Props {
    children: React.ReactNode;
}

export const ParticlesContainer = ({ children }: Props) => {
    return (
        <React.Fragment>
            <div style={{ position: "fixed", width: "100%", height: "100%" }}>
                <Particles
                    id="tsparticles"
                    className="wp-100 hp-100"
                    options={{
                        background: {
                            color: {
                                value: "rgba(0, 124, 155)",
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.5,
                                    size: 180,
                                },
                                push: {
                                    quantity: 6,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 50,
                                enable: true,
                                opacity: 0.4,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.4,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            {children}
        </React.Fragment>
    )
};

export default ParticlesContainer;
