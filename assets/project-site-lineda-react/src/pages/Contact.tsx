import { NavLink } from 'react-router-dom';

import '../style/form.css';

export function Contact(){
	const siteName:string="LINEDA VÊTEMENT's";
    return <>
        <header>
			<h1 className='center'>Contact</h1>
		</header>
		<main>
			<section>
				<h2>Nous contacter</h2>
				<article>
					<h3>Par téléphonne</h3>
					<p>
						tel : <NavLink to='tel:+3312345678'>+3312345678</NavLink>
					</p>
					<p>
						sms : <NavLink to='sms:+3312345678'>+3312345678</NavLink>
					</p>
					<p>
						<NavLink to='https://api.whatsapp.com/send?phone=3312345678&text=Hello' target='_blank'>Nous joindre via whatsapp</NavLink>
					</p>
				</article>
				<article>
					<h3>Par voie postal</h3>
					<p>
					{siteName}<br />
						1 rue de la rue<br />
						00000 Ville
					</p>
				</article>
				<article>
					<h3>Par mail</h3>
					<form action='treatment-mail.html' method='post'>
						<label>Votre Prénom<br />
							<input id='firstname' type='text' name='firstname' placeholder='Prénom' required />
						</label>
						<label>Votre nom<br />
							<input id='name' type='text' name='name' placeholder='Nom' required />
						</label>
						<label>Votre numéro de téléphone<br />
							<input type='tel' id='phone' name='phone' placeholder='01-23-45-67-89' pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}' />
						</label>
						<label>Votre adresse mail<br />
							<input id='email' type='email' name='email' placeholder='adresse@mail.com' pattern='[a-z]{1}[a-z0-9\-_\.]{5,50}@[a-z]{1}[a-z0-9\-_\.]{5,50}\.[a-z]{2,4}' required />
						</label>
						<label>Objet de votre message<br />
							<input id='subject' type='text' name='subject' placeholder='Sujet du message' required />
						</label>
						<label>message<br />
							<textarea id='message' name='message' placeholder='Rédigez votre message ici' required></textarea>
						</label>
						<p>Vos données ne seront conservé que le temps du traitement de votre demande.</p>
						<button type='submit'>Envoyez votre message</button>						
					</form>
				</article>
			</section>
		</main>
    </>;
}
