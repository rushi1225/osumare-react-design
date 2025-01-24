import React from 'react';
import Card from './Card';

const CardSection = () => {
    const cards = [
        {
            
            icon: '/icon01.png', 
            title: 'User-Friendly Interface',
            description: 'Our platform offers seamless task management to boost your efficiency.',
            number: "01",
        },
        {
            icon: '/icon02.png', 
            title: 'Collaborate & Share Effortlessly',
            description: 'Invite team members to work together and achieve your goals faster.',
            number: "02",
        },
        {
            icon: '/icon03.png', 
            title: 'Effortless Collaboration',
            description: 'Invite team members to work together and achieve your goals faster.',
            number: "03",
        },
        {
            icon: '/icon04.png', 
            title: 'Seamless Access',
            description: 'Stay connected and manage your tasks on the go with ease.',
            number: "04",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 max-w-[1320px] mx-auto">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Transform Your Productivity with Our <br/> Innovative To-Do List Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardSection;