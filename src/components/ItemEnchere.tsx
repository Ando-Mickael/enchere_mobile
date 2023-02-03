import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { ItemEnchereProps } from "../util/Interface";

export const ItemEnchere: React.FC<ItemEnchereProps> = ({ enchere }) => {

    let status;
    if (enchere["status"] === 1) {
        status = "Fini";
    } else {
        status = "En cours";
    }

    return (
        <IonCard>
            <img src={enchere["img"]} />
            <IonCardHeader>
                <IonCardTitle>{enchere["nomProduit"]}</IonCardTitle>
                <IonCardSubtitle>{enchere["categorie"]}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <p>Date de debut : {enchere["dateDebut"]} ({enchere["duree"]}h)</p>
                <p>Prix : {enchere["prixMin"]} Ar</p>
                <p>Status : {status}</p>
            </IonCardContent>
        </IonCard>
    );
}