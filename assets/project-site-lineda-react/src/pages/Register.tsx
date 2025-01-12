import React, { useState } from 'react';

export const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        boatAnswer: '',
        confirmBoat:''
    });

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
  
        // Effectuez vos validations et traitements ici
    };

    return <>
            <header>
                <h1 className='center'>Inscription</h1>
            </header>
            <main>
                <section>
                    <h2>Inscription</h2>
                    <form onSubmit={submit}><br />
                        <label>Votre Prénom
                        <input                            
                            type='text'
                            name='firstname'
                            placeholder='Prénom'
                            value={formData.firstname}
                            onChange={change}
                            required
                        />
                        </label>
                        
                        <label>Votre nom
                        <input                            
                            type='text'
                            name='name'
                            placeholder='Nom'
                            value={formData.name}
                            onChange={change}
                            required
                        />
                        </label>
                        
                        <label>Votre numéro de téléphone
                        <input
                            type='tel'
                            name='phone'
                            placeholder='01-23-45-67-89'
                            pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}'
                            value={formData.phone}
                            onChange={change}
                        />
                        </label>
                        
                        <label>Votre adresse mail
                        <input
                            type='email'
                            name='email'
                            placeholder='adresse@mail.com'
                            value={formData.email}
                            onChange={change}
                            required
                        />
                        </label>

                        <label>Entrez votre mot de passe
                        <input
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Mot de passe'
                            value={formData.password}
                            onChange={change}
                            required
                        />
                        </label>
                        
                        <label>Confirmer votre mot de passe
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirmer le mot de passe'
                            value={formData.confirmPassword}
                            onChange={change}
                            required
                        />
                        </label>
                        
                        <label htmlFor='boat'>
                            Vérifier que vous n'êtes pas un robot : combien font 5 + 5 ?<br />
                            <input
                            id='boat'
                            type='text'
                            name='boat'
                            placeholder='réponse en lettre'
                            value={formData.boatAnswer}
                            onChange={change}
                        />
                        </label>
                        <label>
                                En cliquant sur le bouton s'inscrire vous confirmé accepter que vos donnée soit stocker dans notre base de donnée<br />
                                pour une durée de 5 ans après votre dernière commande, ou selon le cas 2 ans après votre dernière connexion<br />
                                la suppression du compte sans commande de moins de 5 ans entraine la destruction de toutes vos informations<br />
                                la suppression de votre compte avec une commande de moins de 5 ans entraine une désactivation définitive de votre compte,<br />
                                et une suppression de vos données au termes des 5 ans après votre dernière commande en raison de la rétroactivité fiscal.<br />
                                Vos données ne seront jamais transmise à des tiers sauf décision de justice.<br />
                        <input
                            id='confirmBoat'
                            type='hidden'
                            name='confirmBoat'
                            placeholder='réponse en lettre'
                            value={formData.confirmBoat}
                            onChange={change}
                        />
                        </label>
                        
                        <button type='submit'>S'inscrire</button>
                    </form>
                </section>
            </main>
        </>;
};
