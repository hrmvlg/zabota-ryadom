import FilterPanel from '../Catalog/FilterPanel/FilterPanel';
import Search from '../Catalog/Search/Search';
import CatalogList from './CatalogList';
import Pagination from './Pagination/Pagination';

export default function Catalog() {
    return (
        <>
            <FilterPanel />
            <Search />
            <CatalogList />
            <Pagination />
        </>
    )
}