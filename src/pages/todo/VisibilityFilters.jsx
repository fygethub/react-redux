import React from "react";
import {connect} from "../../components/react-redux";
import {setFilter as setFilterCreate} from "../../redux/actions";
import {VISIBILITY_FILTERS} from "../../redux/constants";

const VisibilityFilters = ({activeFilter, setFilter}) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={["filter",
                            currentFilter === activeFilter && "filter--active"].join(' ')
                        }
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
            {currentFilter}
          </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {activeFilter: state.visibilityFilter};
};
// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    {setFilter: (dispatch) => (filter) => dispatch(setFilterCreate(filter))}
)(VisibilityFilters);
