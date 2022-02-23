def func
    #complete algo from structy                
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