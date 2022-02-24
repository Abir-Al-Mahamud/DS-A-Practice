
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        elsif l2 is None:
            return l1
        elsif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2  
    end             


def delete_duplicates(head)
    
    # take the head array and iterate over it and search for duplicates
    # upon finding the duplicate numbers, remove them 
    # if a node is removed be sure to reassign .next
    # the linked list is already sorted, however we need maintain that order
    # puts(head.next.next)
    while head.next != nil
        temp = head.next
        if head.val == temp.val
           head.next = temp.next
        end 
    end
    
    return head
    
end

