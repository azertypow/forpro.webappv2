import {fetchForProApi_site} from "~/global/forProApi";
import {useAppStateStore} from "~/stores/appState";

export async function setForProSiteData() {
    useAppStateStore().siteData = await fetchForProApi_site()
}
