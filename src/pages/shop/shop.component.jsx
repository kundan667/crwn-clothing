import { Component } from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { updateCollections } from "../../redux/shop/shop.actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });
        
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-1034a/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => {
        //     updateCollections(collections);
        //     this.setState({ loading: false });
        // })

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // })
    }
    componentWillUnmount(){
        this.unsubscribeFromSnapshot();
      }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={ `${ match.path }` } 
                    render={ (props) => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props } /> }>
                </Route>
                <Route exact path={ `${ match.path }/:collectionId` } 
                    render={ (props) => <CollectionsPageWithSpinner isLoading={ loading } { ...props } /> }>
                </Route>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);