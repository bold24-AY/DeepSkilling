package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void registerBook() {
        if (bookRepository != null) {
            bookRepository.save();
        } else {
            System.out.println("BookRepository is not configured.");
        }
    }
}
