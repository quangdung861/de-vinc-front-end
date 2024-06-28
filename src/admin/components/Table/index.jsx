import { useState, useRef, useEffect, useContext } from 'react'
import { Link, generatePath, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Wraper } from './styles';
import { ROUTER_ADMIN } from 'admin/routes';

const Table = (props) => {
    const {
        name,
        columns,
        data,

        lastPage,

        currentPage,
        setCurrentPage,

        totalOfPage,

        setSearchKeyword,

        itemsPerPage,
        setItemsPerPage,

        selectedRows,
        setSelectedRows,

        path
    } = props;
    const navigate = useNavigate();
    const [isShowItemPerPageDropdown, setIsShowItemPerPageDropdown] = useState(false);
    const [searchString, setSearchString] = useState('')
    const boxSearchRef = useRef(null);
    const tableRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollbarValue, setScrollbarValue] = useState(0);
    const [windowWidth, setWindowWidth] = useState(document.querySelector(".table-block")?.offsetWidth);

    const handleClickRow = (id) => {
        if (path) navigate(generatePath(path, { id }));
    };

    const renderHeaders = () => {
        return columns.map((col, index) => <th key={index} style={{ minWidth: col.width }}>{col.name}</th>)
    }

    const renderData = () => {
        return (
            data?.map((item, index) => (
                <tr key={index} className='row-item'>
                    <td><input type='checkbox' checked={selectedRows.includes(String(item.id))} value={item.id} className='' onChange={onClickCheckbox} /></td>
                    {
                        columns.map((col, index) =>
                            <td key={index} onClick={() => handleClickRow(item.id)}>{col.element(item)}</td>
                        )
                    }
                </tr>
            ))
        )
    }

    const onClickCheckbox = (event) => {
        let checked = event.target.checked;
        let value = event.target.value;
        if (checked) {
            if (!selectedRows.includes(value)) {
                setSelectedRows([...selectedRows, value])
            }
        } else {
            let index = selectedRows.indexOf(value)
            const temp = [...selectedRows];
            temp.splice(index, 1)
            setSelectedRows(temp)
        }
    }

    const onSelectAll = (event) => {
        if (event.target.checked) {
            const temp = data?.map(element => String(element.id))
            setSelectedRows(temp)
        } else {
            setSelectedRows([])
        }
    }

    const handlesetCurrentPage = (page) => {
        setSelectedRows([])
        setCurrentPage(page)
    }

    const renderPagination = () => {
        const pagination = [];
        const nextPage = currentPage + 1 > lastPage ? null : currentPage + 1;
        const prevPage = currentPage - 1 < 1 ? null : currentPage - 1;

        pagination.push(
            <li key="prev" className={prevPage ? "page-item" : "page-item disabled"} onClick={() => handlesetCurrentPage(prevPage)}>
                <div className='page-link' >&laquo;</div>
            </li>
        )

        for (let i = 1; i <= lastPage; i++) {
            pagination.push(
                <li key={i} className={currentPage === i ? "page-item active" : "page-item"} onClick={() => handlesetCurrentPage(i)}>
                    <div className='page-link' >{i}</div>
                </li>
            )
        }

        pagination.push(
            <li key='next' className={nextPage ? "page-item" : "page-item disabled"} onClick={() => handlesetCurrentPage(nextPage)}>
                <div className='page-link' >&raquo;</div>
            </li>
        )
        return pagination;
    }

    const onChangeOption = (option) => {
        setItemsPerPage(option)
        setCurrentPage(1)
        setIsShowItemPerPageDropdown(false)
    }

    const itemPerPageOptions =
        [5, 20, 50, 100].map((option, index) => (
            <div
                className={clsx("per-page-item", itemsPerPage === option && "active")}
                key={index}
                onClick={() => onChangeOption(option)}
            >
                {option}
            </div>
        ));

    useEffect(() => {
        const delayDebouce = setTimeout(() => {
            setSearchKeyword(searchString)
        }, 300)

        return () => clearTimeout(delayDebouce)
    }, [searchString])



    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const value = containerRef.current.scrollLeft;
                setScrollbarValue(value);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    useEffect(() => {
        const handleResize = () => {
            const width = document.querySelector(".table-block")?.offsetWidth;
            setWindowWidth(width);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Wraper>
            <div className="table-wraper">
                <div className="table-name">
                    {name}
                </div>

                <div className="filter-container">
                    <div className="box-search" onClick={() => boxSearchRef.current.focus()}>
                        <i className="fa-solid fa-magnifying-glass icon-search"></i>
                        <input
                            className="input-search"
                            placeholder="Tìm kiếm sản phẩm..."
                            ref={boxSearchRef}
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                    </div>
                </div>

                <div className="table-block">
                    <table
                        id="table"
                        ref={tableRef}
                        style={{ transform: `translateX(-${scrollbarValue}px)` }}
                    >
                        <thead>
                            <tr>
                                <td><input checked={selectedRows?.length === data?.length && data?.length > 0} type='checkbox' className='' onChange={onSelectAll} /></td>
                                {renderHeaders()}
                            </tr>
                        </thead>
                        <tbody>
                            {renderData()}
                        </tbody>
                    </table>

                    <div className="table-footer">
                        <div className="per-page">
                            <div>
                                Hiển thị
                            </div>
                            <div className={clsx('per-page-block', isShowItemPerPageDropdown && "active")}>
                                <div className='per-page-current' onClick={() => setIsShowItemPerPageDropdown(!isShowItemPerPageDropdown)}>
                                    {itemsPerPage} <i className={clsx("fa-solid", isShowItemPerPageDropdown ? "fa-sort-up" : "fa-sort-down")}></i>
                                </div>
                                <div className="per-page-list">
                                    {itemPerPageOptions}
                                </div>
                            </div>
                            <div>
                                kết quả
                            </div>
                        </div>
                        {lastPage > 1 &&
                            <div className='pagination-block'>
                                Từ {((currentPage - 1) * itemsPerPage) + 1} đến {((currentPage - 1) * itemsPerPage) + data?.length} trên tổng {totalOfPage}
                                <ul className="pagination-list">
                                    {renderPagination()}
                                </ul>
                            </div>
                        }
                    </div>
                </div>

                <div
                    className="scrollbar-container"
                    ref={containerRef}
                    style={{
                        width: windowWidth,
                        height: "20px",
                    }}
                >
                    <div
                        className="scrollbar-x"
                        style={{
                            width: tableRef.current?.offsetWidth,
                            height: "20px",
                        }}
                    ></div>
                </div>
            </div>
        </Wraper >
    )
}

export default Table;