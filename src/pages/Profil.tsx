import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonProgressBar, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BtnAjoutEnchere } from "../components/BtnAjoutEnchere";
import { BtnDeconnexion } from "../components/BtnDeconnexion";
import { InfoUtilisateur } from "../components/InfoUtilisateur";
import { ListeEncheres } from "../components/ListeEncheres";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";

export const Profil: React.FC = () => {

    const [encheres, setEncheres] = useState();
    const utilisateurId = new Utilisateur().getId();
    const [isLoad, setIsLoad] = useState(false);

    function getEncheres() {
        const url = baseUrl + `/encheresByUtilisateur/${utilisateurId}`;

        axios.get(url)
            .then((response) => {
                setEncheres(response.data);
                setIsLoad(true);
            });
    }

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            getEncheres();
            event.detail.complete();
        }, 2000);
    }

    useEffect(() => {
        getEncheres();
    }, []);

    if (!isLoad) {
        return (
            <IonPage>
                <IonHeader>
                    <IonTitle>Profil</IonTitle>
                    <IonProgressBar type="indeterminate"></IonProgressBar>
                </IonHeader>
            </IonPage>
        );
    } else {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Profil</IonTitle>
                        <IonButtons slot='end'>
                            <BtnDeconnexion />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <InfoUtilisateur />
                    <h2 className="ion-padding">Mes encheres</h2>
                    <ListeEncheres encheres={encheres} />
                    <BtnAjoutEnchere />
                </IonContent>
            </IonPage>
        );
    }

}