BEGIN
    FOR r IN (SELECT CustomerID, InterestRate FROM Loans JOIN Customers ON Loans.CustomerID = Customers.CustomerID WHERE Customers.Age > 60) LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = r.CustomerID;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR r IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r.CustomerID;
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = r.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR r IN (SELECT Customers.Name, Loans.LoanID, Loans.DueDate 
              FROM Loans 
              JOIN Customers ON Loans.CustomerID = Customers.CustomerID 
              WHERE Loans.DueDate BETWEEN SYSDATE AND SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || r.Name || ', Loan ID ' || r.LoanID || ' is due on ' || TO_CHAR(r.DueDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
