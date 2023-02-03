import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";

export const InfoUtilisateur: React.FC = () => {

    const history = useHistory();
    const utilisateur = new Utilisateur().getUtilisateur();
    const [solde, setSolde] = useState();
    const [isLoad, setIsLoad] = useState(false);

    function getSolde() {
        const url = baseUrl + `/solde/${utilisateur["id"]}`;
        
        axios.get(url)
            .then((response) => {
                setSolde(response.data);
                setIsLoad(true);
            });
    }

    useEffect(() => {
        getSolde();
    }, []);

    if (!isLoad) {
        return (
            <IonPage>
                <IonHeader>
                    <IonTitle>Profil</IonTitle>
                </IonHeader>
                <IonContent>
                    <p>Chargement...</p>
                </IonContent>
            </IonPage>
        );
    } else {
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{utilisateur["nom"]}</IonCardTitle>
                    <IonCardSubtitle>@{utilisateur["pseudo"]}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <p><b>Email : </b>{utilisateur["email"]}</p>
                    <p><b>Mon compte : </b>{solde} Ar</p>
                    <IonButton
                        expand="block"
                        onClick={() => history.push("/demandeRecharge")}>Recharger</IonButton>
                </IonCardContent>
            </IonCard>
        );
    }

} 