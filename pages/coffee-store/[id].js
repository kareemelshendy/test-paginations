import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const CoffeeStore = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(100);
    const [pageNumberLimit, setPageNumberLimit] = useState(7);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    let pageCount = 200;

    useEffect(() => {
        if (currentPage > maxPageNumberLimit) {
            setMaxPageNumberLimit(currentPage);
            setMinPageNumberLimit(currentPage - pageNumberLimit);
        }
    }, [currentPage]);

    const pages = [];

    for (let number = 1; number <= pageCount; number++) {
        pages.push(number);
    }

    return (
        <Pagination>
            <Pagination.Prev
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                    if ((currentPage - 1) % pageNumberLimit === 0) {
                        setMaxPageNumberLimit(
                            maxPageNumberLimit - pageNumberLimit
                        );
                        setMinPageNumberLimit(
                            minPageNumberLimit - pageNumberLimit
                        );
                    }
                }}
                disabled={currentPage === 1}
            />
            {pages.map((number) => {
                if (
                    number < maxPageNumberLimit + 1 &&
                    number > minPageNumberLimit
                ) {
                    return (
                        <Pagination.Item
                            key={number}
                            active={currentPage === number}
                            onClick={() => {
                                setCurrentPage(number);
                            }}
                        >
                            {number}
                        </Pagination.Item>
                    );
                }
            })}

            {/* <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>
            <Pagination.Item>{20}</Pagination.Item> */}
            <Pagination.Next
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                    if (currentPage + 1 > maxPageNumberLimit) {
                        setMaxPageNumberLimit(
                            maxPageNumberLimit + pageNumberLimit
                        );
                        setMinPageNumberLimit(
                            minPageNumberLimit + pageNumberLimit
                        );
                    }
                }}
                disabled={currentPage === pageCount}
            />
        </Pagination>
    );
};

export default CoffeeStore;
