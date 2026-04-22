// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title StudentRegistry
/// @notice Stores a simple name -> roll number registry
contract StudentRegistry {
    struct Student {
        string name;
        string rollNumber;
        bool exists;
    }

    mapping(address => Student) private students;

    event StudentRegistered(address indexed student, string name, string rollNumber);
    event StudentUpdated(address indexed student, string name, string rollNumber);

    function register(string calldata name, string calldata rollNumber) external {
        require(!students[msg.sender].exists, "Already registered");
        students[msg.sender] = Student({name: name, rollNumber: rollNumber, exists: true});
        emit StudentRegistered(msg.sender, name, rollNumber);
    }

    function update(string calldata name, string calldata rollNumber) external {
        require(students[msg.sender].exists, "Not registered");
        students[msg.sender].name = name;
        students[msg.sender].rollNumber = rollNumber;
        emit StudentUpdated(msg.sender, name, rollNumber);
    }

    function getMyRecord() external view returns (string memory name, string memory rollNumber) {
        require(students[msg.sender].exists, "Not registered");
        Student memory student = students[msg.sender];
        return (student.name, student.rollNumber);
    }
}
