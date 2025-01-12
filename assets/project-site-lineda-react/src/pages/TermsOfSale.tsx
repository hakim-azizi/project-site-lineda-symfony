import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductProvider';

import '../style/terms-of-sale.css';


export const TermOfSale: React.FC = () => {

	  const context = useContext(ProductContext);
	  if (!context) {
		// Display a loading message if the context is not ready
		return <picture><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
	  }
 
  const { content, isLoading, error } = context;
  // Destructure the context to extract content, loading status, and errors

  if (error) {
    // Display an error message if there was an issue fetching data
    return (
      <p className='red-color'>
        Une Erreur s'est produite lors du chargement des données
              </p>
    );
  }

  if (isLoading || !content.site.length) {
    // Display a loading message if data is still being fetched
    return <picture><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
  }

	const siteName:string=content.site[0].sitename;

	return<>
	<header>
		<h1 className='center condition'>Conditions de vente</h1>
	</header>
	<NavLink to='' className='close-this-windows' onClick={()=> {window.close()}}>Fermer cette fenetre</NavLink>
	<main className='condition'>
		<section>
<h2>Pr&eacute;ambule :</h2>
<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente s&apos;appliquent &agrave; toutes les ventes conclues par le biais du site Internet : <NavLink to="../">http://site.com</NavLink><br />
A pr&eacute;ciser que tout utilisateur qui le souhaite peut cr&eacute;er son compte client sans que cela ne l&apos;engage &agrave; des achats. La cr&eacute;ation du compte client est sans condition.<br />
L&apos;utilisateur qui souhaiterait acheter sur ce site d&eacute;clare avoir la pleine capacit&eacute; juridique.<br />
Les produits vendus sur le site {siteName} sont conformes &agrave; la l&eacute;gislation en vigueur en France.<br />
En cas de litiges, seules la l&eacute;gislation et la langue fran&ccedil;aise seront applicables.<br />
Toute commande effectu&eacute;e sur ce site suppose la consultation et l&apos;acceptation expresse des pr&eacute;sentes conditions de vente sans qu&apos;il soit n&eacute;cessaire d&apos;une signature manuscrite de l&apos;utilisateur.<br />
La validation du bon de commande constitue une signature &eacute;lectronique qui a, entre les parties, la m&ecirc;me valeur qu&apos;une signature manuscrite.
</p>
<article>
<h2>Article 1. Objet :</h2>
<p>Les pr&eacute;sentes conditions de vente ont pour objet de d&eacute;finir les droits et obligations des Parties n&eacute;s de la vente en ligne des Produits propos&eacute;s sur le site.<br />
Les pr&eacute;sentes conditions de vente s&apos;appliquent &agrave; l&apos;exclusion de tout autre document.</p>
</article>
<article>
<h2>Article 2. Produits - Prix - Mode de paiement :</h2>
<b>2.1. Produits :</b>
<p>Les Produits propos&eacute;s &agrave; la vente par {siteName} sont ceux qui figurent sur le Site, au jour de la consultation du Site par l&apos;utilisateur, et dans la limite des stocks disponibles.
Les photographies illustrant les Produits n&apos;entrent pas dans le champ contractuel.<br />
Les produits vendus par {siteName} sont neufs et garantis contre tout d&eacute;faut, les images et descriptions des produits sont aussi pr&eacute;cises et compl&egrave;tes que possible.<br />
S&apos;il arrive qu&apos;un article soit d&eacute;fectueux ou non- conforme, nous nous engageons &agrave; proc&eacute;der &agrave; un &eacute;change dans la mesure des stocks disponibles.<br />
Si le(s) produit(s) n&apos;est plus disponible, le client sera rembours&eacute;, sous r&eacute;serve que l&apos;article soit retourn&eacute; dans son emballage d&apos;origine et accompagn&eacute; de la facture dans les trente jours suivant la r&eacute;ception du colis, dans tous les cas le l&apos;exp&eacute;dition devra &ecirc;tre effectu&eacute; dans les deux jours ouvr&eacute;e suivant votre r&eacute;clamation, &agrave; l&apos;adresse suivante : <br />
{siteName}<br />
3 avenue Ernest Hemingway<br />
44300 Nantes</p>
<b>2.2. Prix :</b>
<p>Les prix des Produits sont indiqu&eacute;s en euros. Ils tiennent compte de la TVA applicable au jour de la commande.<br />
Les prix sont valables au moment de leur consultation par le client ou pendant la p&eacute;riode indiqu&eacute;e.<br />
Les frais de port sont &agrave; la charge du Client.</p>
<b>2.3 Mode de paiement :</b>
<p>Le client choisit le moyen de paiement parmi ceux propos&eacute;s par {siteName}.<br />
Le choix est offert entre paiement par ch&egrave;que ou via paypal.</p>
</article>
<article>
<h2>Article 3. Enregistrement et validation de la commande :</h2>
<b>3.1 Navigation &agrave; l&apos;int&eacute;rieur du Site :</b>
<p>L&apos;utilisateur peut naviguer librement sur les diff&eacute;rentes pages du site, sans pour autant &ecirc;tre engag&eacute; d&apos;une commande.</p>
<b>3.2 Enregistrement d&apos;une commande :</b>
<p>Si l&apos;utilisateur souhaite passer commande, il cliquera sur la case &#171; Ajouter &agrave; votre panier &#187;.<br />
L&apos;utilisateur validera le r&eacute;capitulatif en cliquant sur &#171; Valider &#187;.</p>
<b>3.3 Validation d&eacute;finitive de la commande :</b>
<p>Apr&egrave;s avoir pris connaissance de l&apos;&eacute;tat de sa commande, il choisira le moyen de paiement qu&apos;il souhaite utiliser pour r&eacute;gler sa commande.<br />
D&egrave;s qu&apos;il valide le paiement, l&apos;utilisateur revient sur le site. Sa commande est enregistr&eacute;e et devient irr&eacute;vocable (paiement C.B).<br />
Le bon de commande est enregistr&eacute; sur les registres informatiques de {siteName} et sera consid&eacute;r&eacute;e comme preuve des relations contractuelles intervenues entre les parties.<br />
La commande deviendra irr&eacute;vocable &agrave; r&eacute;ception de votre ch&egrave;que (paiement ch&egrave;que).</p>
<b>3.4 Confirmation de la commande :</b>
<p>Lorsqu&apos;il aura valid&eacute; son paiement, un r&eacute;capitulatif de la commande lui sera envoy&eacute; par la voie d&apos;e-mail, &agrave; l&apos;adresse e-mail indiqu&eacute;e au moment de son identification.</p>
</article>
<article>
<h2>Article 4. Responsabilit&eacute; :</h2>
<p>{siteName} est seule responsable du contenu de son offre et des engagements qu&apos;elle prend notamment en mati&egrave;re de d&eacute;lai de livraison.</p>
<p>{siteName} est seule habilit&eacute;e &agrave; traiter de toutes les r&eacute;clamations ou litiges relatifs au produit vendu.</p>
<p>{siteName} d&eacute;cline toute responsabilit&eacute; quant au contenu des sites sur lesquels des liens hypertextes peuvent renvoyer &agrave; partir de ce site.</p>
</article>
<article>
<h2>Article 5. Livraison :</h2>
<p>La commande sera ex&eacute;cut&eacute;e au plus tard dans un d&eacute;lai de 2 jours ouvr&eacute; &agrave; compter du jour suivant celui de la validation par l&apos;Acheteur de sa commande.</p>
<b>5.1 Modalit&eacute;s de livraison :</b>
<p>Les produits command&eacute;s par l&apos;Acheteur seront livr&eacute;s &agrave; l&apos;adresse indiqu&eacute;e par ce dernier sur le  de commande sous 7 jours ouvr&eacute;.</p>
<p>A la r&eacute;ception des Produits command&eacute;s, l&apos;Acheteur devra v&eacute;rifier la conformit&eacute; de ces Produits. Toute anomalie concernant la livraison (produit manquant, cass&eacute; ou colis endommag&eacute;,..) devra &ecirc;tre signal&eacute;e par l&apos;Acheteur et devra imp&eacute;rativement &ecirc;tre notifi&eacute;e, le jour m&ecirc;me de la r&eacute;ception ou au plus tard le premier jour ouvr&eacute; suivant la r&eacute;ception &agrave; {siteName}.</p>
<p>Toute r&eacute;clamation formul&eacute;e apr&egrave;s ce d&eacute;lai sera rejet&eacute;e et {siteName} sera d&eacute;gag&eacute;e de toute responsabilit&eacute;.</p>
<b>5.2. Frais de livraison :</b>
<p>Les frais de transport sont &agrave; la charge du client et ils s&apos;appliquent pour chaque commande. Les frais de livraison s&apos;&eacute;l&egrave;vent &agrave; 10% du montant total de la commande.<br />
Le transport est assur&eacute; par la Poste.</p>
<p>Nous prenons l&apos;enti&egrave;re responsabilit&eacute; de l&apos;exportation de nos articles. Il appartient au client de v&eacute;rifier le contenu du colis au moment de la livraison et de formuler les r&eacute;serves le cas &eacute;ch&eacute;ant &agrave; {siteName}.</p>
</article>
<article>
<h2>Article 6. Droit de r&eacute;tractation :</h2>
<p>L&apos;acheteur dispose d&apos;un d&eacute;lai de sept jours ouvrables pour retourner, &agrave; ses frais, le(s) produit(s) qu&apos;il a command&eacute;(s) si celui (ceux)-ci ne lui donne(nt) pas satisfaction. Ce d&eacute;lai court &agrave; compter du jour de la livraison de la commande. Le(s) produit(s) devra (devront) &ecirc;tre retourn&eacute;(s) dans son (leur) conditionnement et son (leur) emballage d&apos;origine &agrave; {siteName}.</p>
<p>Si les conditions sont remplies, {siteName} remboursera &agrave; l&apos;acheteur, dans un d&eacute;lai de trente jours, les sommes correspondant aux produits achet&eacute;s.</p>
</article>
<article>
<h2>Article 7. Informatique et libert&eacute;s :</h2>
<p>Le renseignement des informations nominatives collect&eacute;es dans le cadre de la vente &agrave; distance est obligatoire, ces informations &eacute;tant n&eacute;cessaire pour le traitement et la livraison des commandes ainsi que pour l&apos;&eacute;tablissement des factures. Ces informations sont strictement confidentielles. Le d&eacute;faut de renseignement implique le rejet automatique de la commande.</p>
<p>Conform&eacute;ment &agrave; la loi n&#176;78-17 du 6 janvier 1978 relative &agrave; l&apos;informatique, aux fichiers et aux libert&eacute;s, le traitement des informations nominatives collect&eacute;es sur le site a fait l&apos;objet d&apos;une d&eacute;claration aupr&egrave;s de la Commission Nationale de l&apos;Informatique et des Libert&eacute;s. L&apos;utilisateur dispose d&apos;un droit d&apos;acc&egrave;s, de modification, de rectification et de suppression des donn&eacute;es le concernant.</p>
<p>Pour exercer ce droit, l&apos;utilisateur devra un mail via le formulaire de contact mis &agrave; sa disposition sur le site, soit l&apos;exercer directement sur le site en s&apos;&eacute;tant au pr&eacute;alable connecter a son compte client, soit adresser un courrier postal &agrave; l&apos;adresse suivante :<br /> 
<address>
{siteName}<br />
1 rue de la rue<br />
00000 Ville</address>
</p>
</article>
<article>
<h2>Article 8. Stipulations diverses :</h2>
<b>8.1. Force majeure :</b>
<p>Aucune partie ne sera responsable de la non-ex&eacute;cution totale ou partielle de ses obligations au titre du pr&eacute;sent contrat si cette non-ex&eacute;cution est provoqu&eacute;e par un &eacute;v&egrave;nement constitutif de force majeure.</p>
<p>Seront consid&eacute;r&eacute;s comme cas de force majeur les &eacute;v&egrave;nements remplissant les crit&egrave;res fix&eacute;s par la jurisprudence de la 2i&egrave;me chambre civile de la Cour de cassation.
La partie invoquant un &eacute;v&egrave;nement constitutif de force majeure devra en aviser l&apos;autre Partie dans les cinq jours ouvrables suivant la survenance ou la menace de cet &eacute;v&egrave;nement.
Les parties conviennent qu&apos;elles devront se concerter dans les meilleurs d&eacute;lais afin de d&eacute;terminer ensemble les modalit&eacute;s d&apos;ex&eacute;cution de la commande pendant la dur&eacute;e du cas de force majeure.</p>
<b>8.2. Non validit&eacute; partielle :</b>
<p>Si une ou plusieurs stipulations des pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente sont tenues pour non valides ou d&eacute;clar&eacute;es comme telles en application d&apos;une loi, d&apos;un r&egrave;glement ou &agrave; la suite d&apos;une d&eacute;cision d&eacute;finitive d&apos;une juridiction comp&eacute;tente, les autres stipulations garderont toute leur force et leur port&eacute;e.</p>
<b>8.3. Int&eacute;gralit&eacute; du contrat :</b>
<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente et le r&eacute;capitulatif d&apos;une commande transmis &agrave; l&apos;acheteur forment un ensemble contractuel et constituent l&apos;int&eacute;gralit&eacute; des relations contractuelles intervenues entre les parties.<br />
En cas de contradiction entre ces documents, les conditions g&eacute;n&eacute;rales de vente pr&eacute;vaudront.</p>
<b>8.4. Loi applicable/Juridictions comp&eacute;tentes :</b>
<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente ainsi que les tarifs sont express&eacute;ment agr&eacute;es et accept&eacute;s par l&apos;acheteur; qui d&eacute;clare et reconna&icirc;t en avoir une parfaite connaissance, et renonce, de ce fait, &agrave; se pr&eacute;valoir de tout document contradictoire et, notamment, ses propres conditions g&eacute;n&eacute;rales d&apos;achat, l&apos;acte d&apos;achat entra&icirc;nant acceptation des pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente.</p>
<p>Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente et les relations contractuelles entre {siteName} et l&apos;acheteur sont soumises &agrave; la loi fran&ccedil;aise.<br />
Comp&eacute;tence expresse est attribu&eacute;e aux juridictions de Nantes, lieu de l&apos;&eacute;tablissement stable de {siteName}.</p>
</article>
</section>
</main>
	</>;
};
