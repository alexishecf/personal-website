import React from "react";

import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";

import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function Legal() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "legal_title" })}</title>
      </Head>

      <Header activePage="Legal" />
      <Container smallerMarginsAndPaddings={true}>
        <div className="pb-32 text-gray-900 dark:text-gray-200">
          <h1 className="text-2xl tracking-tight font-extrabold md:text-3xl">
            <FormattedMessage id="legal_legalLabel" />
          </h1>
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_identity" />
          </h2>
          <b>Nom du site web:</b> Alexis Hecfeuille
          <br />
          <b>Adresse:</b>{" "}
          <a className="inline-link" href="https://alexis.hecfeuille.fr/">
            https://alexis.hecfeuille.fr/
          </a>
          <br />
          <b>Propriétaire:</b> Alexis Hecfeuille
          <br />
          <b>Responsable de publication:</b> Alexis Hecfeuille
          <br />
          <b>Conception et réalisation:</b> Alexis Hecfeuille
          <br />
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_hosting" />
          </h2>
          <b>Hébergeur:</b> SAS OVH
          <br />
          <b>Adresse:</b> 2 RUE KELLERMANN 59100 ROUBAIX, RCS Lille Métropole,
          424 761 419 00045
          <br />
          <b>Téléphone:</b> +33 1007
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_information" />
          </h2>
          <p>
            Les informations et documents du site sont présentés à titre
            indicatif, ne revêtent pas un caractère exhaustif, et ne peuvent
            engager la responsabilité du propriétaire du site. Le propriétaire
            du site ne peut être tenu responsable des dommages directs et
            indirects consécutifs à l’accès au site.
          </p>
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_interactivity" />
          </h2>
          <p>
            Les utilisateurs du site peuvent éventuellement y déposer du
            contenu, apparaissant sur le site dans des espaces dédiés (notamment
            via les commentaires). Le contenu déposé reste sous la
            responsabilité de leurs auteurs, qui en assument pleinement
            l’entière responsabilité juridique. Le propriétaire du site se
            réserve le droit de retirer sans préavis et sans justification tout
            contenu déposé par les utilisateurs qui ne satisferait pas à la
            charte déontologique du site ou à la législation en vigueur.
          </p>
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_ip" />
          </h2>
          <p>
            Sauf mention contraire, tous les éléments accessibles sur le site
            (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
            restent la propriété exclusive de leurs auteurs, en ce qui concerne
            les droits de propriété intellectuelle ou les droits d’usage. Toute
            reproduction, représentation, modification, publication, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable
            de l’auteur. Toute exploitation non autorisée du site ou de l’un
            quelconque des éléments qu’il contient est considérée comme
            constitutive d’une contrefaçon et peut être poursuivie en justice.
            Les marques et logos reproduits sur le site sont déposés par les
            sociétés qui en sont propriétaires.
          </p>
          <h2 className="text-xl tracking-tight font-bold md:text-2xl mt-4 mb-2">
            <FormattedMessage id="legal_links" />
          </h2>
          <b className="mt-4 mb-2 inline-block">A - Liens sortants</b>
          <br />
          <p>
            Le propriétaire du site décline toute responsabilité et n’est pas
            engagé par le référencement via des liens hypertextes, de ressources
            tierces présentes sur le réseau Internet, tant en ce qui concerne
            leur contenu que leur pertinence.
          </p>
          <b className="mt-4 mb-2 inline-block">B - Liens entrants</b>
          <br />
          <p>
            Le propriétaire du site autorise les liens hypertextes vers l’une
            des pages de ce site, à condition que ceux-ci ouvrent une nouvelle
            fenêtre et soient présentés de manière non équivoque afin d’éviter
            tout risque de confusion entre le site citant et le propriétaire du
            site ainsi que toute présentation tendancieuse, ou contraire aux
            lois en vigueur. Le propriétaire du site se réserve le droit de
            demander la suppression d’un lien s’il estime que le site source ne
            respecte pas les règles ainsi définies.
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
